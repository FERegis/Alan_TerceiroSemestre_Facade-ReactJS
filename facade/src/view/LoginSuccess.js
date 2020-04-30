import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { CircularProgress } from '@material-ui/core';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function LoginSuccess(){
  return (<><Alert severity="success">Login correto, você está sendo redirecionado</Alert><CircularProgress /></>);
};
