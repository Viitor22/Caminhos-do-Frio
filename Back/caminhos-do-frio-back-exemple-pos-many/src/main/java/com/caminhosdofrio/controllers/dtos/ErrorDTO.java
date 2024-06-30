package com.caminhosdofrio.controllers.dtos;

import java.time.LocalDateTime;

public record ErrorDTO(
        int status,
        String message,
        LocalDateTime timestamp
) {
}
