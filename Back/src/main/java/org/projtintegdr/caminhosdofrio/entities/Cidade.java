package org.projtintegdr.caminhosdofrio.entities;

import jakarta.persistence.*;
import lombok.*;
import org.projtintegdr.caminhosdofrio.dto.ServicoTuristicoResponseDto;

import java.util.Set;
import java.util.stream.Collectors;


/**
 * Classe para objetos do tipo Cidade
 *
 * @author Gabriel Nobrega
 */
@Entity
@Table(name = "cidades")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@AllArgsConstructor
@NoArgsConstructor
public class Cidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column
    private String descricao;

    @Column
    private String urlDaImagem;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "qrcode_id", referencedColumnName = "id")
    private Qrcode qrcode;

    @ManyToMany
    @JoinTable(
            name = "cidades_servicos_turisticos",
            joinColumns = @JoinColumn(name = "cidade_id"),
            inverseJoinColumns = @JoinColumn(name = "servicoturistico_id")
    )
    private Set<ServicoTuristico> servicosTuristicos;

    /**
     * Método para adicionar um servico turistico ao Set servicosTuristicos
     * ao mesmo tempo que adiciona a propria entidade no Set do servico turistico informado
     *
     * @param servicoTuristico ServicoTuristico que irá ser adicionado
     * @author Gabriel Nobrega
     */
    public void addServicoTuristico(ServicoTuristico servicoTuristico) {
        this.servicosTuristicos.add(servicoTuristico);
        servicoTuristico.getCidades().add(this);
    }

    /**
     * Método para obter um List de ServicosTuristicosResponseDto
     *
     * @return Set<ServicoTuristicoResponseDto> - servicosTuristicos em Dto relacionados a entidade
     * @author Gabriel Nobrega
     */
    public Set<ServicoTuristicoResponseDto> getServicosTuristicosDto() {
        return this.servicosTuristicos.stream()
                .map(ServicoTuristicoResponseDto::new)
                .collect(Collectors.toSet());
    }


}
