package com.caminhosdofrio.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cidades_servicos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CidadeServico {

    @EmbeddedId
    private CidadeServicoId cidadeServicoId;

    @ManyToOne
    @MapsId("cidadeId")
    @JoinColumn(name = "cidade_id")
    private Cidade cidade;

    @ManyToOne
    @MapsId("servicoId")
    @JoinColumn(name = "servico_id")
    private ServicoTuristico servicoTuristico;
}
