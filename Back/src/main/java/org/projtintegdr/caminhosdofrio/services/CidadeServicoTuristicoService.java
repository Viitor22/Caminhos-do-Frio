package org.projtintegdr.caminhosdofrio.services;

import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.CidadeDto;
import org.projtintegdr.caminhosdofrio.dto.CidadeServicoTuristico;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.ServicoTuristico;
import org.projtintegdr.caminhosdofrio.repositories.CidadeRepository;
import org.projtintegdr.caminhosdofrio.repositories.ServicoTuristicoRepository;
import org.springframework.stereotype.Service;

/**
 * Classe que representa um service do relacionamento entre
 * Cidade e ServicoTuristico
 */
@Service
@RequiredArgsConstructor
public class CidadeServicoTuristicoService {

    private final CidadeRepository cidadeRepository;
    private final ServicoTuristicoRepository servicoTuristicoRepository;

    /**
     * Método que adiciona uma relação a partir do id de uma cidade e do servico
     *
     * @param data CidadeServicoTuristico( Long cidade_id, Long servico_id )
     * @return CidadeDto
     */
    public CidadeDto adicionarServicoACidade(CidadeServicoTuristico data) {
        Cidade cidade = cidadeRepository.findById(data.cidadeId())
                .orElseThrow(() -> new RuntimeException("Cidade nao encontrada"));

        ServicoTuristico servicoTuristico = servicoTuristicoRepository.findById(data.servicoTuristicoId())
                .orElseThrow(() -> new RuntimeException("Servico Turistico nao encontrado"));

        cidade.addServicoTuristico(servicoTuristico);
        return new CidadeDto(cidadeRepository.save(cidade));
    }


}
