import React, { useState, useEffect, useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import User from './Data/user';
import { Context } from '../../context';
import useStyles from './style'

import { SCAN_POPUP_GUEST_FALSE } from '../../utils/types';

const PopUpAlertGuest = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Context);


  const handleClose = () => {
    dispatch({ type: SCAN_POPUP_GUEST_FALSE })
  };

  return (
    <React.Fragment>

      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        open={state.popupGuest}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        BackdropProps={{style: {backdropFilter: 'blur(5px)'}}}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              color: '#fff',
              borderRadius: '50px',
   
            },
          }}
      >
      <DialogContent style={{color: '#fff'}} >
            <User 
                style={{
                        marginTop: '-25px', 
                        color: '#fff',
                    }} 
                styleTypo={{
                        color: '#fff'
                    }}
            />
        </DialogContent>
     
      </Dialog>
    </React.Fragment>
  );
}

export default PopUpAlertGuest;