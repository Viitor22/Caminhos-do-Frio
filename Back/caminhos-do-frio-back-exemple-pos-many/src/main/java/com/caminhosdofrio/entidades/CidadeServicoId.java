package com.caminhosdofrio.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CidadeServicoId {

    @Column(name = "cidade_id")
    private Long cidadeId;

    @Column(name = "servico_id")
    private Long servicoId;


}
