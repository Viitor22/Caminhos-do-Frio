package com.caminhosdofrio.controllers.dtos.servicos_turisticos;

public record UpdateServicoTuristicoDTO(
        String nome,
        String descricao,
        String cnpj,
        String imagem
) {
}
