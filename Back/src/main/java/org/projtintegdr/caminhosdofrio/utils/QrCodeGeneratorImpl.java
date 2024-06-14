package org.projtintegdr.caminhosdofrio.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Component
public class QrCodeGeneratorImpl implements QrCodeGenerator{
    //TODO fazer essas variaveis de propriedades (Environement variables)
    private final String _baseUrl = "http://localhost:8080/";
    private final String uri = "/cidades/";

    @Override
    public String generateQrcode(Cidade cidade) throws IOException, WriterException {

        String url = gerarUrl(cidade);

        var qrCodeWriter = new QRCodeWriter();
        Map<EncodeHintType, ErrorCorrectionLevel> hints = new HashMap<>();
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
        BitMatrix bitMatrix = qrCodeWriter.encode(
                url, BarcodeFormat.QR_CODE, 500, 500, hints
        );

        int width = bitMatrix.getWidth();
        int height = bitMatrix.getHeight();
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                image.setRGB(x, y, (bitMatrix.get(x, y) ? 0xFF000000 : 0xFFFFFFFF));
            }
        }

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "PNG", baos);
        byte[] bytes = baos.toByteArray();

        return Base64.getEncoder().encodeToString(bytes);
    }

    @Override
    public String gerarUrl(Cidade cidade) {
        String url = _baseUrl + uri + cidade.getId();
        return url;
    }


}
