import React from 'react';
import PedidoBox from '../view/PedidoBox';
import CotacaoBox from '../view/CotacaoBox';
import Container from '@material-ui/core/Container';

export default function Pedido(){
  return (
  <Container>
      <PedidoBox/>
      <CotacaoBox/>
  </Container>
  );
};
 