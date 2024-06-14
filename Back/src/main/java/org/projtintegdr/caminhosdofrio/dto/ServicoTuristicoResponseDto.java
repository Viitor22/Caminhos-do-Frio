package org.projtintegdr.caminhosdofrio.dto;

import org.projtintegdr.caminhosdofrio.entities.ServicoTuristico;

/**
 * Record que representa um Dto de ServicoTuristico
 * com principal função de compor um Set para resposta
 *
 * @param id        Long
 * @param nome      String
 * @param descricao String
 * @param cnpj      String
 * @param imagem    String
 */
public record ServicoTuristicoResponseDto(
        Long id,
        String nome,
        String descricao,
        String cnpj,
        String imagem
) {
    /**
     * Método construtor que transforma uma classe ServicoTuristico
     * em ServicoTuristicoResponseDto
     *
     * @param servicoTuristico ServicoTuristico
     */
    public ServicoTuristicoResponseDto(ServicoTuristico servicoTuristico) {
        this(
                servicoTuristico.getId(),
                servicoTuristico.getNome(),
                servicoTuristico.getDescricao(),
                servicoTuristico.getCnpj(),
                servicoTuristico.getImagem()
        );
    }
}
