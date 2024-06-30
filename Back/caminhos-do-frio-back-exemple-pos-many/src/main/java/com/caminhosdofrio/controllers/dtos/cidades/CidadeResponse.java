package com.caminhosdofrio.controllers.dtos.cidades;

import com.caminhosdofrio.entidades.Cidade;

public record CidadeResponse(
        Long id,
        String nome,
        String descricao,
        String urlDaImagem
) {
    public CidadeResponse(Cidade cidade) {
        this(
                cidade.getId(),
                cidade.getNome(),
                cidade.getDescricao(),
                cidade.getUrlDaImagem()
        );
    }
}
