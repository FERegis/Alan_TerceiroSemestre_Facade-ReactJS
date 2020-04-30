import React from 'react';

const procuraNoBanco = (id, valor) => {
    return id == 1 && valor <= 2000;
}

export default function Credito(id, valor) {
    return procuraNoBanco(id, valor);
}