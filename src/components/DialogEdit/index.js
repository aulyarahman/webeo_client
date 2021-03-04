import React, { useState, useContext, forwardRef } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import EditIcon from '@material-ui/icons/Edit';
import FormEdit from './FormEdit';
import FormAdd from '../DialogAdd/FormAdd';
import { Context } from '../../context';
import {AlertSnackBarFailed} from '../Alert';
import { DIALOG_EDIT_FALSE } from '../../utils/types'



const Transition = forwardRef(function Transition(props, ref) {
  return <Grow in={true} ref={ref} {...props} />;
});

const DialogEdit = () => {
  const [maxWidth, setMaxWidth] = useState('sm');
  const { state, dispatch } = useContext(Context);
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    dispatch({
      type: DIALOG_EDIT_FALSE
    })
  };

  const { dialogEditForm, alertError } = state


  return (
    <div>   
       { alertError ? (<AlertSnackBarFailed />) : null }

      <Dialog
        open={dialogEditForm}
        onClose={handleClose}
        TransitionComponent={Transition}
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
           Edit Data Anggota
        </DialogTitle>
            <DialogContent>

               <FormEdit/>
           
            </DialogContent>
            <DialogActions>  
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogEdit