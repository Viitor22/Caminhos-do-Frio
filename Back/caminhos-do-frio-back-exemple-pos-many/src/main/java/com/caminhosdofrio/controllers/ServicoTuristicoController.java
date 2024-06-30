package com.caminhosdofrio.controllers;

import com.caminhosdofrio.controllers.dtos.servicos_turisticos.CreateServicoTuristicoDTO;
import com.caminhosdofrio.controllers.dtos.servicos_turisticos.UpdateServicoTuristicoDTO;
import com.caminhosdofrio.entidades.ServicoTuristico;
import com.caminhosdofrio.exceptions.servico_turistico.UniqueCnpjException;
import com.caminhosdofrio.services.ServicoTuristicoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicos_turisticos")
@RequiredArgsConstructor
public class ServicoTuristicoController {

    private final ServicoTuristicoService servicoTuristicoService;

    @GetMapping
    public ResponseEntity<List<ServicoTuristico>> listarServicosTuristicos() {
        return ResponseEntity.ok(servicoTuristicoService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicoTuristico> obterServicoTuristicoPorId(@PathVariable Long id) {
        return ResponseEntity.ok(servicoTuristicoService.obterPorId(id));
    }

    @PostMapping
    public ResponseEntity<ServicoTuristico> criarServicoTuristico(@RequestBody CreateServicoTuristicoDTO dto) {
        return new ResponseEntity<>(servicoTuristicoService.salvar(dto), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirServicoTuristicoPorId(@PathVariable Long id) {
        servicoTuristicoService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ServicoTuristico> atualizarServicoTuristicoPorId(
            @PathVariable Long id,
            @RequestBody UpdateServicoTuristicoDTO dto
    ) throws UniqueCnpjException {
        return ResponseEntity.ok(servicoTuristicoService.atualizarPorId(id, dto));
    }

}
