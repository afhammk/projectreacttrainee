/*
:: S A B E E R ::
This Component Acts as a Wrapper To Create Dialog. 
Pass The Launch Control (Button Icon Or Any Element) 
and Pass the Child Components to show in Dialog body

eg. With Text
<DialogWrapper 
    launchText="ADD NEW"
    dialogTitle="NEW BRAND"
    positiveText="SAVE (default)"
    negativeText="CANCEL (default)"
    onPositiveClick={positiveHandlerName}
    onNegaviveClick={negativeHandlerName}
>
    Pass any child components which can be used in <DialogContent>
</DialogWrapper>
    
eg. With ICON
<DialogWrapper 
    launchIcon={<LaunchIcon fontSize="small" />(default)}
    dialogTitle="NEW BRAND"
    positiveText="SAVE (default)"
    negativeText="CANCEL (default)"
    onPositiveClick={positiveHandlerName}
    onNegaviveClick={negativeHandlerName}
>
    Pass any child components which can be used in <DialogContent>
</DialogWrapper>
*/

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function DialogWrapper(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showProgress, setShowProgress] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onNegativeClick != null && props.onNegativeClick();
    setOpen(false);
    setError(null);
  };

  const onPositiveClick = () => {
    setError(null);
    props.onPositiveClick(setOpen,setShowProgress,setError);
  };

  const maxWidth = props.maxWidth ? props.maxWidth : 'sm';
  const dialogBoxWidth = props.boxWidth ? props.boxWidth : 400;
  
  return (
    <span>
       {props.launchText !=null && 
        <Button 
        disabled={props.disabled}
        startIcon={props.launchButtonStartIcon && props.launchButtonStartIcon}
        variant={props.launchButtonVariant && props.launchButtonVariant} 
        color={props.launchButtonColor && props.launchButtonColor} 
        onClick={handleClickOpen}>
            {props.launchText !=null ? props.launchText : 'OPEN'}
        </Button> 
      }
      {
        props.launchIcon !=null && 
        <IconButton aria-label="delete" m={10} onClick={handleClickOpen} disabled={props.disabled}>
            {props.launchIcon !=null ? props.launchIcon : <LaunchIcon fontSize="small" />}
        </IconButton>
      } 
      
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <div style={{width:dialogBoxWidth}}>
        <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
        <DialogContent>
            {props.children}
            {
              error != null && 
            <div style={{marginTop:20}}>
            <Alert severity="error">{error}</Alert>
            </div>
            }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          {props.negativeText == null ? 'CANCEL' : props.negativeText}
          </Button>
          <div className={classes.wrapper}>
            <Button onClick={onPositiveClick} color="primary" autoFocus disabled={showProgress}>
              {props.positiveText == null ? 'SAVE' : props.positiveText}
            </Button>
            {showProgress && <CircularProgress size={24} className={classes.buttonProgress}/>}
          </div>
        </DialogActions>
        </div>
      </Dialog>
    </span>
  );
}

