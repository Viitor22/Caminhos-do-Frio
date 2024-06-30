package com.caminhosdofrio.controllers.dtos.servicos_turisticos;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CNPJ;

public record CreateServicoTuristicoDTO(
       @NotBlank(message = "campo nome é obrigatório")
       String nome,

       @NotBlank (message = "campo descricao é obrigatório")
       String descricao,

       @CNPJ @NotBlank (message = "campo cnpj é obrigatório")
       String cnpj,

       @NotBlank (message = "campo imagem é obrigatório")
       String imagem
) {
}
