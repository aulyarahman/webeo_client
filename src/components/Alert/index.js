import React, {useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Context } from '../../context';
import { makeStyles } from '@material-ui/core/styles';
import { ALERT_SUCCES_FALSE, ALERT_ERROR_FALSE, STOP_LOADING_UI } from '../../utils/types';

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

export const AlertSnackBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: ALERT_SUCCES_FALSE })
    }, 2000);
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    dispatch({ type: ALERT_SUCCES_FALSE })
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>

      <Snackbar open={state.alertSucces} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Berhasil menambahkan data 
        </Alert>
      </Snackbar>
    </div>
  );
}


export const AlertSnackBarFailed = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: ALERT_ERROR_FALSE })
        dispatch({type: STOP_LOADING_UI })
      }, 2000);
    }, [])
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      dispatch({ type: ALERT_ERROR_FALSE })
      if (reason === 'clickaway') {
        return;
      }
      dispatch({type: STOP_LOADING_UI })
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
  
        <Snackbar open={state.alertError} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {state.errorResponse }
          </Alert>
        </Snackbar>
      </div>
    );
  }


  export const AlertSnackBarFailedLogin = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: ALERT_ERROR_FALSE })
      }, 3000);
    }, [])
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
   
      dispatch({ type: ALERT_ERROR_FALSE })
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
  
        <Snackbar open={state.alertError} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {state.errorResponse === 'User tidak ditemukan' ? 
            (<> Data yang kamu masukkan tidak terdaftar </>) : (<> Periksa kembali data kamu </>)   }
          </Alert>
        </Snackbar>
      </div>
    );
  }