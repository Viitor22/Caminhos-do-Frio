package com.caminhosdofrio.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.caminhosdofrio.controllers.dtos.cidadeServico.AssociateCidadeServico;
import com.caminhosdofrio.controllers.dtos.cidadeServico.CidadeServicoResponse;
import com.caminhosdofrio.controllers.dtos.cidades.CidadeResponse;
import com.caminhosdofrio.controllers.dtos.cidades.CreateCidadeDTO;
import com.caminhosdofrio.controllers.dtos.cidades.UpdateCidadeDTO;
import com.caminhosdofrio.entidades.CidadeServico;
import com.caminhosdofrio.entidades.CidadeServicoId;
import com.caminhosdofrio.entidades.QrCode;
import com.caminhosdofrio.exceptions.cidades.CidadeNotFoundException;
import com.caminhosdofrio.exceptions.servico_turistico.ServicoTuristicoNotFoundException;
import com.caminhosdofrio.repositories.CidadeServicoRepository;
import com.caminhosdofrio.repositories.ServicoTuristicoRepository;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.caminhosdofrio.entidades.Cidade;
import com.caminhosdofrio.repositories.CidadeRepository;

@Service
@RequiredArgsConstructor
public class CidadeService {

	private final String uri = "http://localhost:8080/cidades/";

	private final CidadeRepository cidadeRepository;
	private final ServicoTuristicoRepository servicoTuristicoRepository;
	private final CidadeServicoRepository cidadeServicoRepository;
	private final QrcodeService qrcodeService;

	public List<CidadeResponse> listarCidades() {
		return cidadeRepository.findAll()
				.stream()
				.map(CidadeResponse::new)
				.toList();
	}

	public CidadeResponse obterCidadePorID(Long id) {
		var cidade = cidadeRepository.findById(id)
				.orElseThrow(CidadeNotFoundException::new);
		return new CidadeResponse(cidade);
	}

	public CidadeResponse criarCidade(CreateCidadeDTO dto) throws IOException, WriterException {
		var cidadeCriada = cidadeRepository.save(new Cidade(dto));

		var url = gerarUrl(cidadeCriada);
		var qrCode = qrcodeService.criarQrCode(url);

		cidadeCriada.setQrCode(qrCode);
		return new CidadeResponse(cidadeRepository.save(cidadeCriada));
	}

	public boolean deletarCidadePorId(Long id) {
		var exists = cidadeRepository.existsById(id);
		boolean deleted = false;

		if (exists) {
			deleted = true;
			cidadeRepository.deleteById(id);
		}
		return deleted;
	}

	public CidadeResponse atualizarCidade(Long id, UpdateCidadeDTO dto) {
		var cidadeOptional = cidadeRepository.findById(id);

		if(cidadeOptional.isPresent()) {
			Cidade cidade = cidadeOptional.get();

			if (!dto.nome().isBlank()) {
				cidade.setNome(dto.nome());
			}
			if (!dto.descricao().isBlank()) {
				cidade.setDescricao(dto.descricao());
			}
			if (!dto.urlDaImagem().isBlank()) {
				cidade.setUrlDaImagem(dto.urlDaImagem());
			}
			return new CidadeResponse(cidade);
		} else {
			throw new CidadeNotFoundException();
		}
	}

	public String gerarUrl(Cidade cidade) {
		return uri + cidade.getId();
	}

	public void associateServico(Long cidadeId, AssociateCidadeServico dto) {

		var cidade = cidadeRepository.findById(cidadeId)
				.orElseThrow(CidadeNotFoundException::new);

		var servicoTuristico = servicoTuristicoRepository.findById(dto.servicoId())
				.orElseThrow(ServicoTuristicoNotFoundException::new);

		var id = new CidadeServicoId(cidade.getId(), servicoTuristico.getId());
		var entity = new CidadeServico(
				id, cidade, servicoTuristico
		);

		cidadeServicoRepository.save(entity);

	}

	public List<CidadeServicoResponse> listarServicos(Long cidadeId) {

		var cidade = cidadeRepository.findById(cidadeId)
				.orElseThrow(CidadeNotFoundException::new);

		return cidade.getCidadesServicos()
				.stream()
				.map(cs ->
					new CidadeServicoResponse(cs.getServicoTuristico())
				)
				.toList();
	}

	public QrCode obterQrcode(Long id) {
		var cidade = cidadeRepository.findById(id)
				.orElseThrow(CidadeNotFoundException::new);

		return cidade.getQrCode();
	}
}
