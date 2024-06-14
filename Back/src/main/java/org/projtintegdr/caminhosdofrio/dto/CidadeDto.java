package org.projtintegdr.caminhosdofrio.dto;


import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;

import java.util.Set;

/**
 * Record que representa um Dto de cidade
 *
 * @param id                 Long
 * @param nome               String
 * @param descricao          String
 * @param urlDaImagem        String
 * @param qrcode             QrCode
 * @param servicosTuristicos Set<ServicoTuristicoResponseDto>
 */
public record CidadeDto(
        Long id,
        String nome,
        String descricao,
        String urlDaImagem,
        Qrcode qrcode,

        Set<ServicoTuristicoResponseDto> servicosTuristicos
) {
    /**
     * Método construtor que transforma uma classe Cidade em
     * CidadeDto
     *
     * @param cidade Cidade
     */
    public CidadeDto(Cidade cidade) {
        this(cidade.getId(),
                cidade.getNome(),
                cidade.getDescricao(),
                cidade.getUrlDaImagem(),
                cidade.getQrcode(),
                cidade.getServicosTuristicosDto());
    }
}
