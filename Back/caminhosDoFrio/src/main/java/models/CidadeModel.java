package models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class CidadeModel {
	@Getter
	private @Id @GeneratedValue Long id;
	@Getter
	@Setter
	private String nome;
	@Getter
	@Setter
	private String descricao;
	@Getter
	@Setter
	private String urlDaImagem;

}
