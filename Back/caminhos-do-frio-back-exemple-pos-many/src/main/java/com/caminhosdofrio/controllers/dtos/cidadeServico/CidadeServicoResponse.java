package com.caminhosdofrio.controllers.dtos.cidadeServico;

import com.caminhosdofrio.entidades.ServicoTuristico;

public record CidadeServicoResponse(
        Long servicoId,
        String nome,
        String descricao,
        String cnpj,
        String imagem
) {
    public CidadeServicoResponse(ServicoTuristico servicoTuristico) {
        this(
                servicoTuristico.getId(),
                servicoTuristico.getNome(),
                servicoTuristico.getDescricao(),
                servicoTuristico.getCnpj(),
                servicoTuristico.getImagem()
        );
    }
}
