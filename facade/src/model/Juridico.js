import React from 'react';

const procuraNoBanco = (id) => {
    return id == 1;
}

export default function Juridico(id) {
    return procuraNoBanco(id);
}