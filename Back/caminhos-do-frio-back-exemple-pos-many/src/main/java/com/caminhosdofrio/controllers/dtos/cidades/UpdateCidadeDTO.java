package com.caminhosdofrio.controllers.dtos.cidades;

public record UpdateCidadeDTO(
        String nome,
        String descricao,
        String urlDaImagem
) {
}
