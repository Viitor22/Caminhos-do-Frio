package org.projtintegdr.caminhosdofrio.dto;

import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;

/**
 * Record que representa um Dto de Cidade
 * com principal função de compor um Set para resposta
 *
 * @param id          Long
 * @param nome        String
 * @param descricao   String
 * @param urlDaImagem String
 * @param qrcode      QrCode
 */
public record CidadeResponseDto(
        Long id,
        String nome,
        String descricao,
        String urlDaImagem,
        Qrcode qrcode
) {
    /**
     * Método construtor que transforma uma classe Cidade
     * em CidadeResponseDto
     *
     * @param cidade Cidade
     */
    public CidadeResponseDto(Cidade cidade) {
        this(
                cidade.getId(),
                cidade.getNome(),
                cidade.getDescricao(),
                cidade.getUrlDaImagem(),
                cidade.getQrcode()
        );
    }


}
