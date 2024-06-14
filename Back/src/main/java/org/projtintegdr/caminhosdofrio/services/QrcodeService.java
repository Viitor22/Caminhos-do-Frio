package org.projtintegdr.caminhosdofrio.services;

import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;
import org.projtintegdr.caminhosdofrio.repositories.QrcodeRepository;
import org.projtintegdr.caminhosdofrio.utils.QrCodeGenerator;
import org.projtintegdr.caminhosdofrio.utils.QrCodeGeneratorImpl;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class QrcodeService {

    private final QrcodeRepository qrcodeRepository;
    private final QrCodeGenerator qrCodeGenerator;

    public Qrcode criarQrcode(Cidade cidade) throws IOException, WriterException {
        Qrcode qrcode = new Qrcode();
        String qrcodeStr = qrCodeGenerator.generateQrcode(cidade);
        qrcode.setQrcode(qrcodeStr);
        qrcode.setUrl(qrCodeGenerator.gerarUrl(cidade));

        return qrcodeRepository.save(qrcode);
    }

}
