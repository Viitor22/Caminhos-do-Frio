package com.caminhosdofrio.exceptions.cidades;

import com.caminhosdofrio.controllers.dtos.ErrorDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class CidadeExceptionHandler {

    @ResponseBody
    @ExceptionHandler(CidadeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorDTO handleCidadeNotFoundException(CidadeNotFoundException ex) {
        return new ErrorDTO(
                HttpStatus.NOT_FOUND.value(),
                "Cidade não encontrada",
                LocalDateTime.now()
        );
    }
}


