import React, {useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Context } from '../../../context';
import { makeStyles } from '@material-ui/core/styles';
import { ALERT_SUCCES_UPDATE_FALSE, ALERT_ERROR_FALSE } from '../../../utils/types';

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

 const AlertSnackBarUpdate = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Context);


  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: ALERT_SUCCES_UPDATE_FALSE })
    }, 2000);
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    dispatch({ type: ALERT_SUCCES_UPDATE_FALSE })
    setOpen(false);

   
  };

  return (
    <div className={classes.root}>
        
      <Snackbar open={state.alertSuccesUpdate} autoHideDuration={6000} onClick={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Berhasil update data 
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertSnackBarUpdate