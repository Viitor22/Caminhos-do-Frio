package com.caminhosdofrio.utils;

import com.google.zxing.WriterException;

import java.io.IOException;

public interface QrCodeGenerator {



    /**
     * Gera um qrcode em formato de String que redireciona para a url
     * informada
     * @param url
     * @return String qrcode
     * @throws IOException
     * @throws WriterException
     * @author Gabriel Nobrega
     */
    String generateQrcode(String url) throws IOException, WriterException;
}
