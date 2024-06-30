package com.caminhosdofrio.services;

import com.caminhosdofrio.entidades.QrCode;
import com.caminhosdofrio.repositories.QrcodeRepository;
import com.caminhosdofrio.utils.QrCodeGenerator;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class QrcodeService {

    private final QrcodeRepository qrcodeRepository;
    private final QrCodeGenerator qrCodeGenerator;

    public QrCode criarQrCode(String url) throws IOException, WriterException {
        QrCode qrCode = new QrCode();

        var qrcodeStr = qrCodeGenerator.generateQrcode(url);
        qrCode.setQrcode(qrcodeStr);
        qrCode.setUrl(url);

        return qrcodeRepository.save(qrCode);
    }

}
