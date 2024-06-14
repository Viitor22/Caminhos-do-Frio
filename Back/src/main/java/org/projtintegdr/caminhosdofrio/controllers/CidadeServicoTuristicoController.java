package org.projtintegdr.caminhosdofrio.controllers;

import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.CidadeDto;
import org.projtintegdr.caminhosdofrio.dto.CidadeServicoTuristico;
import org.projtintegdr.caminhosdofrio.dto.ServicoTuristicoDto;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.services.CidadeServicoTuristicoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cidade_servico")
@RequiredArgsConstructor
public class CidadeServicoTuristicoController {

    private final CidadeServicoTuristicoService service;

    @PostMapping("/cidade")
    public CidadeDto addServicoTuristicoACidade(@RequestBody CidadeServicoTuristico data) {
        return service.adicionarServicoACidade(data);
    }


}
