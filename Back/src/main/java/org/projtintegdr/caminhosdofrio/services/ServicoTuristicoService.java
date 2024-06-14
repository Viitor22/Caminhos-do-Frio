package org.projtintegdr.caminhosdofrio.services;

import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.dto.ServicoTuristicoDto;
import org.projtintegdr.caminhosdofrio.entities.ServicoTuristico;
import org.projtintegdr.caminhosdofrio.repositories.ServicoTuristicoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ServicoTuristicoService {
/*
TODO implementar o metodo obterServicoTuristicoPorId
TODO implementar o metodo atualizarServicoTuristicoPorId
TODO implementar o metodo removerServicoTuristicoPorId
*/
    private final ServicoTuristicoRepository servicoTuristicoRepository;

    public ServicoTuristico criarServicoTuristico(ServicoTuristico servicoTuristico) {
        return servicoTuristicoRepository.save(servicoTuristico);
    }

    public List<ServicoTuristicoDto> obterTodosServicosTuristicos() {
        List<ServicoTuristico> servicoTuristicos = servicoTuristicoRepository.findAll();
        return servicoTuristicos.stream()
                .map(ServicoTuristicoDto::new)
                .collect(Collectors.toList());
    }
}
