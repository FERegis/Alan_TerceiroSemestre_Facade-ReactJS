import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { CircularProgress } from '@material-ui/core';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function PedidoSuccess(){
  return (<><Alert severity="success">Pedido aceito, partiu comprar tudo em cerveja, você está sendo redirecionado</Alert><CircularProgress /></>);
};
