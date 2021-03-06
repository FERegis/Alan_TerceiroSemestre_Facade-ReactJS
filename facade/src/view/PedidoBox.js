import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Card, TextField } from '@material-ui/core';
import FinanceiroFacade from '../model/FinanceiroFacade'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MensagemFactory from '../controller/MensagemFactory';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function PedidoBox(){
  const [age, setAge] = React.useState('');
  const history = useHistory();
  const [id, setId] = useState('');
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const req = async () => {
    var result = FinanceiroFacade(id, valor)
    const sleep = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    if(result){
        history.push('/pedidoSuccess')    

        await sleep(1000);

        history.push('/pedido') 
    }else{
    history.push('/pedidoFailed')    

    await sleep(1000);

    history.push('/pedido') 
    
    }

    MensagemFactory(age);
  }

  return (<Card height="1000px" variant="outlined">
      <FormHelperText>Pedido</FormHelperText>
      <TextField label="Id" variant="filled" value={id} onChange={evento => {setId(evento.target.value);}}>
      </TextField>
      <TextField label="Valor" variant="filled" value={valor} onChange={evento => {setValor(evento.target.value);}}>
      </TextField>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Mensagem
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={1}>Whats</MenuItem>
          <MenuItem value={2}>Email</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={req} variant="contained" color="primary">Verificar</Button>
      </Card>);
};
