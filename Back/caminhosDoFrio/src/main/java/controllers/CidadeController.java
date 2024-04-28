package controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dtos.CidadeDto.CidadeRecordDto;
import models.CidadeModel;
import repositories.CidadeRepository;

@RestController

public class CidadeController {
	@Autowired
	CidadeRepository cidadeRepository;

	@PostMapping("/cidades")
	public ResponseEntity<CidadeModel> saveProduct(@RequestBody CidadeRecordDto cidadeRecordDto) {
		if (cidadeRecordDto == null) {

			throw new IllegalArgumentException("Produto inválido");
		} else {
			CidadeModel cidadeModel = new CidadeModel();
			BeanUtils.copyProperties(cidadeRecordDto, cidadeModel);
			cidadeRepository.save(cidadeModel);
			return ResponseEntity.status(HttpStatus.CREATED).body(cidadeModel);

		}
	}

}
