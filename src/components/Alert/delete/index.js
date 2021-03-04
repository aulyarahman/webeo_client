import React, {useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Context } from '../../../context';
import { makeStyles } from '@material-ui/core/styles';
import { ALERT_SUCCES_UPDATE_FALSE, ALERT_SUCCES_DELETE_FALSE } from '../../../utils/types';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const AlertSnackBarDelete = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: ALERT_SUCCES_DELETE_FALSE })
    }, 2000);
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    dispatch({ type: ALERT_SUCCES_DELETE_FALSE })
    setOpen(false);

   
  };

  return (
    <div className={classes.root}>
        
      <Snackbar open={state.alertSuccesDelete} autoHideDuration={6000} onClick={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Berhasil hapus data 
        </Alert>
      </Snackbar>
    </div>
  );
}

export const AlertSnackBarFailedDelete = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { state, dispatch } = useContext(Context);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      dispatch({ type: ALERT_SUCCES_DELETE_FALSE })
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
  
        <Snackbar open={state.alertError} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {state.errorResponse ? 
            (<> Data Gagal Di Hapus, Mohon coba lagi </>) : null   }

            
         
          </Alert>
        </Snackbar>
      </div>
    );
  }