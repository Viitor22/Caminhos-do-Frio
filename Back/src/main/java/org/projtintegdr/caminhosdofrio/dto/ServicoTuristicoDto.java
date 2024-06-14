package org.projtintegdr.caminhosdofrio.dto;

import org.projtintegdr.caminhosdofrio.entities.ServicoTuristico;

import java.util.Set;

/**
 * record que representa a classe ServicoTuristico
 *
 * @param id        Long
 * @param nome      String
 * @param descricao String
 * @param cnpj      String
 * @param imagem    String
 * @param cidades   Set<CidadeResponseDto>
 */
public record ServicoTuristicoDto(
        Long id,
        String nome,
        String descricao,
        String cnpj,
        String imagem,
        Set<CidadeResponseDto> cidades
) {

    /**
     * Método construtor que transforma um ServicoTuristico em
     * ServicoTuristicoDto
     *
     * @param servicoTuristico ServicoTuristico
     */
    public ServicoTuristicoDto(ServicoTuristico servicoTuristico) {
        this(
                servicoTuristico.getId(),
                servicoTuristico.getNome(),
                servicoTuristico.getDescricao(),
                servicoTuristico.getCnpj(),
                servicoTuristico.getImagem(),
                servicoTuristico.getCidadesDto()
        );
    }
}
