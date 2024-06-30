package com.caminhosdofrio.controllers.dtos.cidades;

import jakarta.validation.constraints.NotBlank;

public record CreateCidadeDTO(
     @NotBlank(message = "O campo nome é obrigatório")
     String nome,
     @NotBlank(message = "O campo descrição é obrigatório")
     String descricao,
     String urlDaImagem
) {
}
