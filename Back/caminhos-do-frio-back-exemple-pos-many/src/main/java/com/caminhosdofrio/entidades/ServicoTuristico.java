package com.caminhosdofrio.entidades;

import com.caminhosdofrio.controllers.dtos.servicos_turisticos.CreateServicoTuristicoDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "servicosTuristicos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServicoTuristico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;

	private String descricao;

	@Column(unique = true, nullable = false)
	private String cnpj;

	private String imagem;

	public ServicoTuristico(CreateServicoTuristicoDTO dto) {
		this.nome = dto.nome();
		this.descricao = dto.descricao();
		this.cnpj = dto.cnpj();
		this.imagem = dto.imagem();
	}
}
