import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default function SimpleAlerts({message}) {

  return (
      <Alert className="fixed top-20" style={{left:-4}} severity="error">{message}</Alert>
  );
}
