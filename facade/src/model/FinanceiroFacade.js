import React from 'react';
import Serasa from './Serasa'
import Juridico from './Juridico'
import Credito from './Credito'

const metodoChamador = (id, valor) => {
    var serasa = Serasa(id);
    var juridico = Juridico(id);
    var credito = Credito(id, valor);
    
    return serasa && juridico && credito;
}

export default function FinanceiroFacade(id, valor) {
    return metodoChamador(id, valor);
}