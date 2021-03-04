
import React, { useState, useContext, forwardRef } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grow from '@material-ui/core/Grow';
import FormAdd from '../DialogAdd/FormAdd';
import { Context } from '../../context';
import {AlertSnackBarFailed} from '../Alert';
import { DIALOG_ADD_FALSE } from '../../utils/types';


const Transition = forwardRef(function Transition(props, ref) {
  return <Grow in={true} ref={ref} {...props} />;
});

const DialogAdd = () => {
  const [maxWidth, setMaxWidth] = useState('sm');
  const { state, dispatch } = useContext(Context);


  const handleClose = () => {
    dispatch({
      type: DIALOG_ADD_FALSE
    })
  };

  const {alertError, dialogAddForm} = state

  return (
    <div>   
          { alertError ? (<AlertSnackBarFailed />) : null }
      <Dialog
        open={dialogAddForm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={maxWidth}
        BackdropProps={{style: {backdropFilter: 'blur(4px)', background: 'rgba(125, 144, 178, 0.5)'}}}
        PaperProps={{
          style: {
            boxShadow: 'none',
            borderRadius: '30px',
            backgroundColor: '#F4F7FC'
          },
        }}
      >
   
        <DialogTitle id="form-dialog-title" style={{textAlign: 'center'}}>
           Tambah Data Anggota
        </DialogTitle>
            <DialogContent>

                <FormAdd style={{ height: '55px'}}/> 
   
            </DialogContent>
            <DialogActions>  
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogAdd