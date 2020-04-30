import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Card, TextField } from '@material-ui/core';
import LoginAuth from '../model/LoginAuth';
import { useHistory } from 'react-router-dom'

export default function LoginBox(){
  const history = useHistory()
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const auth = async () => {
    var result = LoginAuth(login,senha);
    if(result) {
      history.push('/loginSuccess')

      const sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

      await sleep(2000);

      history.push('/pedido')
    } else {
      history.push('/loginFailed')
    }
  }


  return (<Card height="1000px" variant="outlined">
      <TextField label="Login" variant="filled" value={login} onChange={evento => {setLogin(evento.target.value);}}>
      </TextField>
      <TextField label="Senha" variant="filled" value={senha} onChange={evento => {setSenha(evento.target.value);}}>
      </TextField>
      <Button onClick={auth} variant="contained" color="primary">Entrar</Button>
      </Card>);
};
