import React from 'react';
import Cotacao from './Cotacao';

//Override
const getValor = (valor) => {
    return Cotacao(valor) * 5.75;  
}

export default function CotacaoAdapter(valor) {   
    return getValor(valor);
}