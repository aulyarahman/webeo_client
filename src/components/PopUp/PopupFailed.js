import React, { useState, useEffect, useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import User from '../../pages/User';
import { Context } from '../../context';
import useStyles from './style'

import { SCAN_POPUP_FAILED, SCAN_POPUP_FAILED_FALSE } from '../../utils/types'

const PopUpAlertFailed = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(Context);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xl');
  const [noHp, setNoHp] = useState('');


  const handleClickOpen = (e) => {
    
    if (e.key === 'Enter') { 
      setOpen(true);
    } 
  };

  const handleClose = () => {
    dispatch({ type: SCAN_POPUP_FAILED_FALSE })
  };

  const handleChange = (e) => {
    
  }


  return (
    <React.Fragment>
 
      <TextField
          id="input-with-icon-textfield"
          label="Authentication"
          className={classes.textField}
          variant="outlined"
          required
          onChange={handleChange}
          type="number"
          onKeyPress={handleClickOpen}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                +62
              </InputAdornment>
            ),
          }}
        />

      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        open={state.popupFailed}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        BackdropProps={{style: {backdropFilter: 'blur(4px)'}}}
        PaperProps={{
            style: {
              backgroundColor: '#D0A1A1',
              boxShadow: 'none',
              color: '#000',
              borderRadius: '50px',
              height: '100%'
            },
          }}
      >

        <DialogContent style={{color: '#000', marginTop: '13%'}} >
   
            <img src="/asset_hipmi/icon_alert.png" style={{marginLeft: '40%', }}/>

            <DialogContentText style={{marginLeft: '40%', fontSize: '50px'}}>
             No Entry !!!
           </DialogContentText>

           <DialogContentText style={{marginLeft: '39%'}}>
           Mohon maaf anda dilarang masuk
           </DialogContentText>

        </DialogContent>
     
      </Dialog>
    </React.Fragment>
  );
}

export default PopUpAlertFailed;