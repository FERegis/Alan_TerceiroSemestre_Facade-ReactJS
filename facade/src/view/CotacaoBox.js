import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Card, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Cotacao from '../model/Cotacao';
import CotacaoAdapter from '../model/CotacaoAdapter';

export default function CotacaoBox(){
  const [age, setAge] = React.useState('');
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

  const classesSty = useStyles();

  const calcula = () => {
    if(age == 1){
        alert(Cotacao(valor))   
    } 
    else if (age == 2)
    {
        alert(CotacaoAdapter(valor))  
    }
  }

  return (<Card height="1000px" variant="outlined">
      <FormHelperText>Cotacao</FormHelperText>
      <TextField label="Valor" variant="filled" value={valor} onChange={evento => {setValor(evento.target.value);}}>
      </TextField>
      <FormControl className={classesSty.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Tipo
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classesSty.selectEmpty}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={1}>Real</MenuItem>
          <MenuItem value={2}>Dolar</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={calcula} variant="contained" color="primary">Calcular</Button>
      </Card>);
};
