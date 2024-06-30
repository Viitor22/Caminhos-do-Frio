package com.caminhosdofrio.services;

import com.caminhosdofrio.controllers.dtos.cidades.CreateCidadeDTO;
import com.caminhosdofrio.entidades.Cidade;
import com.caminhosdofrio.repositories.CidadeRepository;
import com.google.zxing.WriterException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CidadeServiceTest {

    @Mock
    private CidadeRepository cidadeRepository;

    @InjectMocks
    private CidadeService cidadeService;

    @Mock
    private QrcodeService qrcodeService;

    @Captor
    private ArgumentCaptor<Cidade> cidadeArgumentCaptor;

    @Captor
    private ArgumentCaptor<Long> cidadeIdArgumentCaptor;

    public static CreateCidadeDTO createCidadeDTO() {
        return new CreateCidadeDTO(
          "Cg",
                "kfadsjnajna",
                "afasfgassagasa"
        );
    }

    public static Cidade createCidade(Long id) {
        return new Cidade(
                id,
                "Cg",
                "kfadsjnajna",
                "afasfgassagasa",
                null,
                null
        );
    }

    @Nested
    class CreateCidade {
        @Test
        @DisplayName("Deve criar cidade com sucesso")
        void criarCidadeComSucesso() throws IOException, WriterException {
            var cidade = createCidade(1L);

            doReturn(cidade)
                    .when(cidadeRepository)
                    .save(cidadeArgumentCaptor.capture());


            doReturn(null)
                    .when(qrcodeService)
                    .criarQrCode(any());

            var input = createCidadeDTO();
            var output = cidadeService.criarCidade(input);

            var cidadeCaptor = cidadeArgumentCaptor.getValue();

            assertNotNull(output);
            assertEquals(input.nome(), cidadeCaptor.getNome());
            assertEquals(input.descricao(), cidadeCaptor.getDescricao());
            assertEquals(input.urlDaImagem(), cidadeCaptor.getUrlDaImagem());
        }

        @Test
        @DisplayName("Deve lancar uma exception ao erro")
        void deveLancarErro() {
            doThrow(new RuntimeException())
                    .when(cidadeRepository)
                    .save(any());

            var input = createCidadeDTO();

            assertThrows(RuntimeException.class, () -> cidadeService.criarCidade(input));
        }

    }

    @Nested
    class GetCidadeById {
        @Test
        @DisplayName("Deve obter cidade com sucesso quando presente")
        void deveObterCidadeComSucesso() {
            Long cidadeId = 1L;
            var cidade = createCidade(cidadeId);

            doReturn(Optional.of(cidade))
                .when(cidadeRepository)
                .findById(cidadeIdArgumentCaptor.capture());

            var output = cidadeService.obterCidadePorID(cidade.getId());

            //assertTrue(output.isPresent());
            assertEquals(cidade.getId(), cidadeIdArgumentCaptor.getValue());
        }

        @Test
        @DisplayName("Deve obter optional vazio quando nao há cidade")
        void deveObterOptionalVazio() {
            var cidadeId = 1L;

            doReturn(Optional.empty())
                .when(cidadeRepository)
                .findById(cidadeIdArgumentCaptor.capture());

            var output = cidadeService.obterCidadePorID(cidadeId);

            //assertTrue(output.isEmpty());
            assertEquals(cidadeId, cidadeIdArgumentCaptor.getValue());
        }
    }

    @Nested
    class ListCidades {
        @Test
        @DisplayName("Deve obter todos as cidades com sucesso")
        void deveObterTodosAsCidades() {
            var cidade = createCidade(1L);
            List<Cidade> cidades = new ArrayList<>();
            cidades.add(cidade);

            doReturn(cidades)
                    .when(cidadeRepository)
                    .findAll();

            var output = cidadeService.listarCidades();

            assertNotNull(output);
            assertEquals(cidades.size(), output.size());
            assertTrue(output.contains(cidade));
        }

        @Test
        @DisplayName("Deve obter lista de cidades vazia")
        void deveObterListaDeCidadesVazia() {
            List<Cidade> cidades = new ArrayList<>();

            doReturn(cidades)
                    .when(cidadeRepository)
                    .findAll();

            var output = cidadeService.listarCidades();

            assertNotNull(output);
            assertEquals(cidades.size(), output.size());
            assertTrue(output.isEmpty());
        }
    }

    @Nested
    class DeleteCidadeById {

        @Test
        @DisplayName("Deve deletar cidade com sucesso quando existe")
        void deveDeletarCidadeComSucesso() {

            doReturn(true)
                    .when(cidadeRepository)
                    .existsById(cidadeIdArgumentCaptor.capture());

            doNothing()
                    .when(cidadeRepository)
                    .deleteById(cidadeIdArgumentCaptor.capture());

            var cidadeId = 1L;

            var output = cidadeService.deletarCidadePorId(cidadeId);

            var idList = cidadeIdArgumentCaptor.getAllValues();
            assertEquals(cidadeId, cidadeIdArgumentCaptor.getValue());
            assertTrue(output);

            verify(cidadeRepository).existsById(idList.get(0));
            verify(cidadeRepository).existsById(idList.get(1));
        }

        @Test
        @DisplayName("Nao deve deletar quando a cidade nao existe")
        void naoDeveDeletarCidadeNaoExiste() {
            doReturn(false)
                    .when(cidadeRepository)
                    .existsById(cidadeIdArgumentCaptor.capture());

            var cidadeId = 1L;
            var output = cidadeService.deletarCidadePorId(cidadeId);

            assertFalse(output);
            assertEquals(cidadeId, cidadeIdArgumentCaptor.getValue());

            verify(cidadeRepository).existsById(cidadeIdArgumentCaptor.getValue());
            verify(cidadeRepository, never()).deleteById(cidadeIdArgumentCaptor.getValue());
        }
    }
}