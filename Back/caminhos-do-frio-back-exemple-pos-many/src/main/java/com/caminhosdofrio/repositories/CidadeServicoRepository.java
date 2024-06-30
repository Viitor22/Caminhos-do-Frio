package com.caminhosdofrio.repositories;

import com.caminhosdofrio.entidades.CidadeServico;
import com.caminhosdofrio.entidades.CidadeServicoId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CidadeServicoRepository
    extends JpaRepository<CidadeServico, CidadeServicoId> {
}
