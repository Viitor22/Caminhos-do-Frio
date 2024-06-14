package org.projtintegdr.caminhosdofrio.dto;

/**
 * record que representa a interacao de uma Cidade com um
 * Servico turistico
 *
 * @param cidadeId           Long - id de uma Cidade
 * @param servicoTuristicoId Long - id de um ServicoTuristico
 */
public record CidadeServicoTuristico(
        Long cidadeId,
        Long servicoTuristicoId
) {
}
