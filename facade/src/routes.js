import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import Login from './controller/Login';
import LoginFailed from './view/LoginFailed'
import LoginSuccess from './view/LoginSuccess'
import Pedido from './controller/Pedido'
import PedidoFailed from './view/PedidoFailed'
import PedidoSuccess from './view/PedidoSuccess'

export default function Routes() {

    return (
        <BrowserRouter> 
            <Route path="/login" exact component={Login}/>
            <Route path="/loginFailed" exact component={LoginFailed}/>
            <Route path="/loginSuccess" exact component={LoginSuccess}/>
            <Route path="/pedido" exact component={Pedido}/>
            <Route path="/pedidoFailed" exact component={PedidoFailed}/>
            <Route path="/pedidoSuccess" exact component={PedidoSuccess}/>
        </BrowserRouter>
    );
}