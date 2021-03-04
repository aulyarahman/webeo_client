import React, { useState, useEffect, useContext, Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { AlertSnackBarFailed } from '../Alert'
import User from './Data/user';
import axios from 'axios'
import useStyles from './style'
import PopUpAlertGuest from './PopupGuest'
import { Context } from '../../context';
import { 
      SCAN_USER, 
      SCAN_POPUP_FAILED, 
      SCAN_POPUP_GUEST, 
      SCAN_POPUP_FAILED_FALSE, 
      SCAN_POPUP_GUEST_FALSE,
      SET_ERRORS,
      ALERT_ERROR,
      ALERT_ERROR_FALSE,
      SCAN_POPUP_PENGURUS,
      SCAN_POPUP_PENGURUS_FALSE
      } from '../../utils/types';

import PopUpAlertFailed from './PopupFailed'
import UserInfo from '../UserInfo'

const PopUpAlert = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(Context);
  const [noHandphone, setNoHandphone] = useState('');

  const [dataSpg, setDataSpg] = useState()

  const handleClickOpen = async (e) => {
    
    if (e.key === 'Enter') { 
      
        try {

           const check = await axios.get(`/v1/auth/spg/${noHandphone}`)
           dispatch({ type: SCAN_USER, value: check.data.data })
           setDataSpg(check.data.data)
            
                    if(check.data.data.hasilSwab === 'Positif') {
                      dispatch({ type: SCAN_POPUP_FAILED })
                      setNoHandphone('')
                      setTimeout(() => {
                        dispatch({type: SCAN_POPUP_FAILED_FALSE })
                      }, 3000);
                      return false
                    }

                    if(check.data.data.hasilSwab === 'Belum Ada') {
                      dispatch({type: SET_ERRORS, value: 'Mohon lakukan test SWAB terlebih dahulu' })
                      dispatch({ type: ALERT_ERROR })
                      setNoHandphone('')
                      return false
                    }

                    if(check.data.data.role === 'Pengurus') {
                        dispatch({type: SCAN_POPUP_PENGURUS })
                        setNoHandphone('')
                        setTimeout(() => {
                          dispatch({type: SCAN_POPUP_PENGURUS_FALSE })
                        }, 3000);
                    }

                    if(check.data.data.role === 'Tamu') {
                      dispatch({ type: SCAN_POPUP_GUEST })
                      setNoHandphone('')
                      setTimeout(() => {
                        dispatch({ type: SCAN_POPUP_GUEST_FALSE })
                      }, 3000);
                    }


                } catch (err) {
                  //alert('No Handphone Tidak Terdaftar')
                  setNoHandphone('')
                  const error = err.response.data.error
                  dispatch({type: SET_ERRORS, value: error })
                  dispatch({ type: ALERT_ERROR })
               
                }
            

          
            

            
    } 
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <Fragment>
        { state.popupFailed ? (<PopUpAlertFailed />) : null }
        { state.popupGuest ? (<PopUpAlertGuest/>) : null }
        { state.alertError ? (<AlertSnackBarFailed />) : null }
      <TextField
          label="Authentication"
          className={classes.textField}
          variant="outlined"

          type="number"
          value={noHandphone}
          onChange={(e) => setNoHandphone(e.target.value)}
          onKeyPress={handleClickOpen}
        />

      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        open={state.popupPeng}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        BackdropProps={{style: {backdropFilter: 'blur(4px)'}}}
        PaperProps={{
            style: {
              backgroundColor: '#14AF27',
              boxShadow: 'none',
              color: '#fff',
              borderRadius: '50px',
              height: '100%'
            },
          }}
      >

        <DialogContent style={{color: '#fff'}} >
            <User 
                    style={{
                    marginTop: '3%', 
                    color: '#fff',
                    }} 
                    styleTypo={{
                    color: '#fff'
                    }}
            />
        </DialogContent>
    
      </Dialog>
    </Fragment>
  );
}


export default PopUpAlert;