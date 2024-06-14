package org.projtintegdr.caminhosdofrio.utils;

import com.google.zxing.WriterException;
import org.projtintegdr.caminhosdofrio.entities.Cidade;
import org.projtintegdr.caminhosdofrio.entities.Qrcode;

import java.io.IOException;

public interface QrCodeGenerator {

    /**
     * Gera um qrcode em formato de String que redireciona para a url
     * da cidade
     * @param cidade
     * @return String qrcode
     * @throws IOException
     * @throws WriterException
     * @author Gabriel Nobrega
     */
    String generateQrcode(Cidade cidade) throws IOException, WriterException;

    /**
     * Gera uma url que redireciona para o conteudo da cidade
     * a partir do seu Id
     * @return url
     * @author Gabriel Nobrega
     */
    String gerarUrl(Cidade cidade);


}
