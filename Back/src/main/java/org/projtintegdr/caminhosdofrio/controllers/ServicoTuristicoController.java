package org.projtintegdr.caminhosdofrio.controllers;

import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.ServicoTuristicoDto;
import org.projtintegdr.caminhosdofrio.dto.ServicoTuristicoResponseDto;
import org.projtintegdr.caminhosdofrio.entities.ServicoTuristico;
import org.projtintegdr.caminhosdofrio.services.ServicoTuristicoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servico_turistico")
@RequiredArgsConstructor
public class ServicoTuristicoController {

    private final ServicoTuristicoService servicoTuristicoService;

    @GetMapping
    public List<ServicoTuristicoDto> obterServicosTuristicos() {
        return servicoTuristicoService.obterTodosServicosTuristicos();
    }

    @PostMapping
    public ServicoTuristico criarServicoTuristico(@RequestBody ServicoTuristico servicoTuristico) {
        return servicoTuristicoService.criarServicoTuristico(servicoTuristico);
    }


}
