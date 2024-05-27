package controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import models.ServicoTuristico;
import repositories.ServicoTuristico;


@Repository
public interface ServicoTuristicoRepository extends JpaRepository<ServicoTuristico, Long> {
}

@RestController
@RequestMapping("/servicos")
public class ServicoTuristicoController {
    @Autowired
    private ServicoTuristicoRepository repository;

    @GetMapping("/")
    public List<ServicoTuristico> getAllServicos() {
        return repository.findAll();
    }

    @PostMapping("/")
    public ServicoTuristico createServico(@RequestBody ServicoTuristico servico) {
        return repository.save(servico);
    }

    @GetMapping("/{id}")
    public ServicoTuristico getServicoById(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    @PutMapping("/{id}")
    public ServicoTuristico updateServico(@PathVariable Long id, @RequestBody ServicoTuristico servicoAtualizado) {
        ServicoTuristico servico = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
        servico.setNome(servicoAtualizado.getNome());
        servico.setDescricao(servicoAtualizado.getDescricao());
        servico.setCnpj(servicoAtualizado.getCnpj());
        servico.setImagem(servicoAtualizado.getImagem());
        return repository.save(servico);
    }

    @DeleteMapping("/{id}")
    public void deleteServico(@PathVariable Long id) {
        repository.deleteById(id);
    }
}