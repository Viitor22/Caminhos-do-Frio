package com.caminhosdofrio.controllers;

import org.junit.jupiter.api.Nested;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CidadeControllerTest {

    @Autowired
    private WebTestClient webClient;

    @Nested
    class CreteCidade {

    }

    @Nested
    class ListarCidades {

    }

    @Nested
    class GetCidadeById {

    }

    @Nested
    class DeleteCidadeById {

    }

}