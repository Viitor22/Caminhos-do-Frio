package org.projtintegdr.caminhosdofrio.services;

import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.CidadeDto;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;
import org.projtintegdr.caminhosdofrio.repositories.CidadeRepository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Classe que tem como função ser o Service da
 * entidade Cidade
 */
@Service
@RequiredArgsConstructor
public class CidadeService {

    /*
    TODO implementar o metodo obterCidadePorId
    TODO implementar o metodo atualizarCidadePorId
    TODO implementar o metodo removerCidadePorId
    */
    private final CidadeRepository cidadeRepository;
    private final QrcodeService qrcodeService;

    /**
     * Método que cria cidade e salva a entidade no banco de dados
     * a partir dos dados de uma cidade, compõe a mesma com um qrCode
     *
     * @param cidade Cidade( sem Id )
     * @return Cidade
     * @throws IOException
     * @throws WriterException
     */
    public Cidade criarCidade(Cidade cidade) throws IOException, WriterException {
        Cidade cidadeCriada = cidadeRepository.save(cidade);
        Qrcode qrCodeGerado = qrcodeService.criarQrcode(cidadeCriada);
        cidadeCriada.setQrcode(qrCodeGerado);
        return cidadeRepository.save(cidadeCriada);
    }

    /**
     * Método que obtém todas cidades presentes no banco de dados e as
     * retorna como List<CidadeDto>
     *
     * @return List<CidadeDto>
     */
    public List<CidadeDto> listarCidades() {
        List<Cidade> cidades = cidadeRepository.findAll();
        return cidades.stream()
                .map(CidadeDto::new)
                .collect(Collectors.toList());
    }
}
