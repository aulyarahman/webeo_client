import React, {useEffect, useState, useContext } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Context } from '../../context';
import axios from 'axios';
import { AlertSnackBarFailedDelete } from '../Alert/delete'
import { DIALOG_HAPUS_FALSE, ALERT_SUCCES_DELETE, SET_ERRORS, ALERT_ERROR, GET_DATA } from '../../utils/types'

import useStyles from './style'



export default function PopUpAlert() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('xl');
  const [noHp, setNoHp] = useState('');
  const { state, dispatch } = useContext(Context);

  const handleClickOpen = (e) => {
    setOpen(true);
    dispatch({
      type: "DIALOG_HAPUS"
    })
  };

  const handleClose = () => {
    setOpen(false);

    dispatch({
      type: "DIALOG_HAPUS_FALSE"
    })
  };

  const handleDelete = (e) => {
      e.preventDefault();
      const array = [...state.getData];
      const index = array.findIndex(x => x._id===state.dataEdit);
      axios.delete(`/v1/users/${state.dataEdit}`)
            .then(() => {
              array.splice(index, 1);
              dispatch({type: GET_DATA, value: [...array]})
              dispatch({ type: ALERT_SUCCES_DELETE })
              dispatch({ type: DIALOG_HAPUS_FALSE })
            })
            .catch(err => {
              const error = err
              dispatch({ type: SET_ERRORS, value: error})
              dispatch({ type: ALERT_ERROR })
            });

  }

  const {alertError, dialogHapusForm} = state

  return (
    <React.Fragment>
        
    {/* <DeleteIcon onClick={handleClickOpen}/> */}
    { alertError ? (<AlertSnackBarFailedDelete />) : null }
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={dialogHapusForm}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        BackdropProps={{style: {backdropFilter: 'blur(4px)', background: 'rgba(125, 144, 178, 0.5)'}}}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              color: '#000'
            },
          }}
      >

        <DialogContent style={{color: '#000'}} >
   
        <DialogContentText style={{
                marginLeft: '8%', 
                color: '#000', 
                fontWeight: 'bolder', 
                fontSize: '40px',
                textAlign: 'center'
                
            }}>
           Yakin ingin <br/> menghapus Data ini ? <br/>
           <span style={{fontSize: '15px'}}>
               Peringatan “Data Yang Sudah Terhapus, Tidak Dapat Dikembalikan”
            </span><br/>

           <Button 
           onClick={handleDelete}
           style={{
                backgroundColor: '#fff', 
                color: '#000', 
                fontWeight: 'bold'
              }}>
              Yes</Button>

           <Button 
           onClick={handleClose}
           style={{
               backgroundColor: '#109CF1', 
               color: '#fff', 
               paddingLeft: 10,
               marginLeft: 10,
               fontWeight: 'bold'
            }}>No</Button>
           </DialogContentText>

        </DialogContent>
     
      </Dialog>
     
    </React.Fragment>
  );
}