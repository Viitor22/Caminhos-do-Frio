package org.projtintegdr.caminhosdofrio.controllers;


import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.CidadeDto;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.services.CidadeService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/cidades")
@RequiredArgsConstructor
public class CidadeController {
    //TODO fazer com que atraves de um servico possa adicioanr uma cidade.
    private final CidadeService cidadeService;

    @GetMapping
    public List<CidadeDto> listarCidades() {
        return cidadeService.listarCidades();
    }

    @PostMapping
    public Cidade criarCidade(@RequestBody Cidade cidade) throws IOException, WriterException {
        return cidadeService.criarCidade(cidade);
    }

}
