import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Card, TextField } from '@material-ui/core';
import FinanceiroFacade from '../model/FinanceiroFacade'
import { useHistory } from 'react-router-dom'

export default function PedidoBox(){
  const history = useHistory();
  const [id, setId] = useState('');
  const [valor, setValor] = useState('');

  const req = async () => {
    var result = FinanceiroFacade(id, valor)
    const sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    if(result){
        history.push('/pedidoSuccess')    

        await sleep(4000);

        history.push('/pedido') 
    }else{
    history.push('/pedidoFailed')    

    await sleep(4000);

    history.push('/pedido') 
}
  }

  return (<Card height="1000px" variant="outlined">
      <TextField label="Id" variant="filled" value={id} onChange={evento => {setId(evento.target.value);}}>
      </TextField>
      <TextField label="Valor" variant="filled" value={valor} onChange={evento => {setValor(evento.target.value);}}>
      </TextField>
      <Button onClick={req} variant="contained" color="primary">Verificar</Button>
      </Card>);
};
