package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event.ID;

import models.CidadeModel;

@Repository
public interface CidadeRepository extends JpaRepository<CidadeModel, ID> {

}
