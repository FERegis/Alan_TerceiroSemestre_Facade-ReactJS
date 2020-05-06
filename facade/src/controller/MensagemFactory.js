import React from 'react';
import Sms from '../model/EnvioMensagensSms';
import Whats from '../model/EnvioMensagemWhatsApp';
import Email from '../model/EnvioMensagensEmail';

const getMensagem = (resposta) => {
    if(resposta == 1){
        Whats();
    } else if (resposta == 2){
        Email();
    } else {
        Sms();
    }
}

export default function MensagemFactory(resposta) {
    getMensagem(resposta);
}