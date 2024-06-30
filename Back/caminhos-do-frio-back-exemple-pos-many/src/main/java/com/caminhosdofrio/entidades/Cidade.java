package com.caminhosdofrio.entidades;

import com.caminhosdofrio.controllers.dtos.cidades.CreateCidadeDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cidades")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cidade {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;

	private String descricao;

	private String urlDaImagem;

	public Cidade(CreateCidadeDTO dto) {
		this.nome = dto.nome();
		this.descricao = dto.descricao();
		this.urlDaImagem = dto.urlDaImagem();
	}

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "qrcode_id", referencedColumnName = "id")
	private QrCode qrCode;

	@OneToMany(mappedBy = "cidade")
	private List<CidadeServico> cidadesServicos = new ArrayList<>();
}
