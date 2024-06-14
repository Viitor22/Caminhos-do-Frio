package org.projtintegdr.caminhosdofrio.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Classe que representa objetos do tipo QrCode
 * @author Gabriel Nobrega
 */
@Entity
@Table(name = "qrcodes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Qrcode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String qrcode;


}
