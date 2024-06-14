package org.projtintegdr.caminhosdofrio.entities;

import jakarta.persistence.*;
import lombok.*;
import org.projtintegdr.caminhosdofrio.dto.CidadeResponseDto;

import java.util.Set;
import java.util.stream.Collectors;

/**
 * Classe para objetos do tipo ServicoTuristico
 * @author Gabriel Nobrega
 */
@Entity
@Table(name = "servicosturisticos")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@AllArgsConstructor
@NoArgsConstructor
public class ServicoTuristico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column
    private String descricao;

    @Column(nullable = false)
    private String cnpj;

    @Column
    private String imagem;

    @ManyToMany(mappedBy = "servicosTuristicos")
    private Set<Cidade> cidades;

    /**
     * Método que adiciona uma cidade ao Set cidades ao mesmo tempo que
     * esse servico turistico será adicionado ao Set da cidade informada
     *
     * @param cidade Cidade que será adicionada
     * @author Gabriel Nobrega
     */
    public void addCidade(Cidade cidade) {
        this.cidades.add(cidade);
        cidade.getServicosTuristicos().add(this);
    }

    /**
     * Método que pega o proprio Set de Cidade e retorna como um Set de
     * CidadeResponseDto
     *
     * @return Set<CidadeResponseDto> - Set que representa o dto de todas cidades relacionadas ao objeto
     * @author Gabriel Nobrega
     */
    public Set<CidadeResponseDto> getCidadesDto() {
        return this.cidades.stream()
                .map(CidadeResponseDto::new)
                .collect(Collectors.toSet());
    }
}
