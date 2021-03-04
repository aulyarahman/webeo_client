import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Linear from '../LoadingUI/Linear';
import { AlertSnackBarFailed } from '../Alert'
import { Context } from '../../context';
import { ALERT_SUCCES, LOADING_UI, STOP_LOADING_UI, SET_ERRORS, ALERT_ERROR, GET_DATA } from '../../utils/types'


const DialogImportFromExcel = ({style}) => {
  const { state, dispatch } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [selectFile, setSelectFile] = useState(null);
  const [fileName, setFileName] = useState('Selected File');
  const [dataUserB, setDataUser] = useState(state.getData)
  const inputFileRef = useRef()


  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({type: STOP_LOADING_UI })
    setSelectFile(null)
    setFileName('Selected File')
  };


  const onChangeHandler = (e) => {
      setSelectFile(e.target.files[0])
      setFileName(e.target.files[0].name)
   }


   const handleSubmit = async (e) => {
    dispatch({type: LOADING_UI })
    const data = new FormData() 
    data.append('csv', selectFile)
    
    try {
      const dataToExcel = await axios.post('/v1/users/importexl', data);
      const x = dataToExcel.data.data;
      const x1 = [...x, ...state.getData];
      dispatch({ type: GET_DATA, value: x1})
      setTimeout(function () {
        dispatch({type: STOP_LOADING_UI })
        dispatch({type: ALERT_SUCCES })
        setOpen(false)
    }, 1000);
  
    } catch (err) {
      dispatch({type: SET_ERRORS, value: err.response.data.error});
      dispatch({type: ALERT_ERROR })
    }

  } 

  return (
    <div>
      { state.alertError ? (<AlertSnackBarFailed />) : null }
      <ImportExportIcon onClick={handleClickOpen} style={style} />
     <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
        BackdropProps={{style: {backdropFilter: 'blur(4px)', background: 'rgba(125, 144, 178, 0.5)'}}}
        PaperProps={{
          style: {
            boxShadow: 'none',
            borderRadius: '20px',
          },
        }}
      >
        {state.loading ? (<Linear />) : null }
        <DialogContent>
          <p>{fileName}</p>
        <input
          style={{display: 'none'}}
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChangeHandler}
        />
        <label htmlFor="contained-button-file">
          <Button 
                startIcon={<CloudUploadIcon />} 
                variant="contained" 
                color="primary" 
                component="span" 
                style={{left: '25%', width: '50%'}}
              >
            Select File
          </Button>
        </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Import Data
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default DialogImportFromExcel;