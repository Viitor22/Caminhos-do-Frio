package com.caminhosdofrio.controllers;

import java.io.IOException;
import java.util.List;

import com.caminhosdofrio.controllers.dtos.cidadeServico.AssociateCidadeServico;
import com.caminhosdofrio.controllers.dtos.cidades.CidadeResponse;
import com.caminhosdofrio.controllers.dtos.cidades.CreateCidadeDTO;
import com.caminhosdofrio.controllers.dtos.cidades.UpdateCidadeDTO;
import com.caminhosdofrio.entidades.QrCode;
import com.caminhosdofrio.services.CidadeService;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.caminhosdofrio.entidades.Cidade;

@RestController
@RequestMapping("/cidades")
@RequiredArgsConstructor
public class CidadeController {

	private final CidadeService cidadeService;

	@PostMapping
	public ResponseEntity<CidadeResponse> criarCidade(@RequestBody @Validated CreateCidadeDTO dto)
			throws IOException, WriterException
	{
		var cidade = cidadeService.criarCidade(dto);
		return new ResponseEntity<>(cidade, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<CidadeResponse>> listarCidades() {

		List<CidadeResponse> cidadesList = cidadeService.listarCidades();
		return ResponseEntity.ok().body(cidadesList);
	}

	@GetMapping("/{id}")
	public ResponseEntity<CidadeResponse> pesquisarCidadePorId(@PathVariable Long id) {
		var cidade = cidadeService.obterCidadePorID(id);

		return ResponseEntity.ok().body(cidade);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deletarUsuarioPorId(@PathVariable Long id) {
		boolean deleted = cidadeService.deletarCidadePorId(id);
		var responseEntity = ResponseEntity.notFound().build();

		if (deleted) {
			responseEntity = ResponseEntity.noContent().build();
		}
		return responseEntity;
	}

	@PatchMapping("/{id}")
	public ResponseEntity<?> atualizarCidade(
			@RequestBody @Validated UpdateCidadeDTO dto,
			@PathVariable Long id) {

		return ResponseEntity.ok(cidadeService.atualizarCidade(id, dto));
	}

	// QRCODE

	@GetMapping("/{id}/qrcode")
	public ResponseEntity<QrCode> obterQRCode(@PathVariable Long id) {
		var qrcode = cidadeService.obterQrcode(id);
		return ResponseEntity.ok(qrcode);
	}

	//RELACAO ENTRE CIDADE E SERVICO:

	@PostMapping("/{cidadeId}/servicos")
	public ResponseEntity<?> associarServico(
			@PathVariable("cidadeId") Long cidadeId,
			@RequestBody AssociateCidadeServico dto
	) {

		cidadeService.associateServico(cidadeId, dto);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/{cidadeId}/servicos")
	public ResponseEntity<?> listarServicos(@PathVariable("cidadeId") Long cidadeId) {

		var servicos = cidadeService.listarServicos(cidadeId);
		return ResponseEntity.ok(servicos);
	}
}
