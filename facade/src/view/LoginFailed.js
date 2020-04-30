import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function LoginFailed(){
  return (<><Alert severity="error">Login falho, pora menor!</Alert></>);
};
