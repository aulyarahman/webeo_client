import React, { useState, useEffect, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';
import { Context } from '../../context';
import { AlertSnackBarFailed } from '../Alert'

import { 
  DIALOG_ADD_FALSE, 
  ALERT_SUCCES,
  ALERT_ERROR,
  SET_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  GET_DATA
  
} from '../../utils/types';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '430px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



const FormAdd = ({ style }) => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Context);

    const [kehadiran, setKehadiran] = useState();
    const [swab, setSwab] = useState();
    const [role, setRole] = useState();
    const [nohp, setNohp] = useState();
    const [name, setName] = useState();
    const [nokursi, setNokursi] = useState();
    
    const [dataUserB, setDataUser] = useState(state.getData)


    const handleSubmit = (e) => {
      dispatch({ type: LOADING_UI })
      e.preventDefault();

      const dataUser = {
        noKursi: nokursi,
        role: role,
        statusKehadiran: kehadiran,
        name: name,
        hasilSwab: swab,
        noHandphone: nohp
      }

      axios.post('/v1/users', dataUser)
            .then(res => { 
              const x = res.data.data
              dispatch({type: ALERT_SUCCES })
              dispatch({ type: DIALOG_ADD_FALSE })
              dispatch({ type: STOP_LOADING_UI })
              dispatch({ type: GET_DATA, value: [x, ...dataUserB]})
            }) 
            .catch(err => {
              const error = err.response.data.error
              if(error.indexOf("kosong") > -1)  dispatch({ type: SET_ERRORS, value: 'Data Tidak Boleh Kosong'})
              else if(error.indexOf("Nomor Tidak Valid") > -1){
                dispatch({ type: SET_ERRORS, value: 'No Handphone tidak valid !'})
              }
              else {
                dispatch({ type: SET_ERRORS, value: error})
              }
              
              dispatch({ type: ALERT_ERROR })
              dispatch({ type: STOP_LOADING_UI })
            })
    }


    return ( 
        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{marginLeft: '-5px'}}
   >
    
             <TextField
                autoFocus
                margin="dense"
                id="nohp"
                label="No Handphone"
                type="text"
                pattern="[0-9]*"
                name="nohp"
                variant="outlined"
                value={nohp}
                fullWidth
                onChange={(e) => setNohp(e.target.value)}
                      
            />


            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nama Lengkap"
                type="text"
                name="name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
       
            />

            <TextField
                
                margin="dense"
                id="nokursi"
                label="No Kursi"
                type="text"
                name="nokursi"
                variant="outlined"
                value={nokursi}
                fullWidth
                onChange={(e) => setNokursi(e.target.value)}
        
            />

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="x1">Status Dalam Organisasi</InputLabel>
              <Select
                    labelId="x1"
                    id="status-dalam-organisasi"
                    label="Status Dalam Organisasi"
                    style={{height: '40px', width: '100.5%'}}
                    value={role}
                    defaultValue=""
                    name="status"
                    onChange={(e) => setRole(e.target.value)}
                
                    >

                    <MenuItem value="Pengurus">Pengurus</MenuItem>
                    <MenuItem value="Tamu">Tamu</MenuItem>
                    <MenuItem value="Spg">Spg</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="x2">Hasil Swab</InputLabel>
              <Select
                    labelId="x2"
                    id="hasil-swab"
                    label="Hasil Swab"
                    style={{height: '40px', width: '100.5%'}}
                    value={swab}
                    defaultValue=""
                    name="hasilswab"
                    onChange={(e) => setSwab(e.target.value)}
             
                    >
   
                    <MenuItem value="Belum Ada">Belum Ada</MenuItem>
                    <MenuItem value="Positif">Positif</MenuItem>
                    <MenuItem value="Negatif">Negatif</MenuItem>
                </Select>
            </FormControl>

           <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="x3">Status Kehadiran</InputLabel>
              <Select
                    labelId="x3"
                    id="status-kehadiran"
                    label="Status Kehadiran"
                    value={kehadiran}
                    defaultValue=""
                    style={{height: '40px', width: '100.5%'}}
                    name="kehadiran"
                    onChange={(e) => setKehadiran(e.target.value)}
                
                    >
                    <MenuItem value="Tidak Hadir">Tidak Hadir</MenuItem>
                    <MenuItem value="Hadir">Hadir</MenuItem>
                    
                </Select>
            </FormControl>

            <Button variant="contained" disabled={state.loading} color="primary" onClick={handleSubmit} style={{marginTop: 20}}>
                   {state.loading && (
                      <CircularProgress color="secondary" style={{position: 'absolute'}}/>
                    )}
                simpan data
            </Button>

        </Grid>
     );
}
 
export default FormAdd;
