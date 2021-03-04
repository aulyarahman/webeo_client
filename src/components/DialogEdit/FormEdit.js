import React, { useState, useEffect, useContext, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'; 
import Tabs from '@material-ui/core/Tabs';
import SkeletonLoading from '../LoadingUI/Skeleton';
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Context } from '../../context';
import axios from 'axios';
import { 
  DIALOG_EDIT_FALSE,
  ALERT_ERROR,
  SET_ERRORS,
  ALERT_SUCCES_UPDATE,
  LOADING_UI,
  STOP_LOADING_UI,
  LOADING_DATA,
  STOP_LOADING_DATA,

} from '../../utils/types'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '430px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectInput: {
      height: '40px', 
      width: '100.5%'
    }
  }));


const FormEdit = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Context);
    const [dataEdit, setDataEdit] = useState([]);

    const [kehadiran, setKehadiran] = useState('Tidak Hadir');
    const [swab, setSwab] = useState('Belum Ada');
    const [role, setRole] = useState('Tamu');
    const [nohp, setNohp] = useState('');
    const [name, setName] = useState('');
    const [nokursi, setNokursi] = useState('');

    useEffect(() => {
      // dispatch({ type: LOADING_DATA })
      // dispatch({ type: STOP_LOADING_DATA })
      const array = [...state.getData];
      const item = array.find(x => x._id == state.dataEdit);
        try {
              setName(item.name)
              setNohp(item.noHandphone)
              setNokursi(item.noKursi)
              setKehadiran(item.statusKehadiran)
              setSwab(item.hasilSwab)
              setRole(item.role)
             
              
        } catch (err) {
          dispatch({ type: STOP_LOADING_DATA })
        }
      
    
    } ,[])


    const handleSubmit = async e=>{

      e.preventDefault()
      dispatch({ type: LOADING_UI })
      const dataUser = {
        noKursi: nokursi,
        role: role,
        statusKehadiran: kehadiran,
        name: name,
        hasilSwab: swab,
        noHandphone: nohp
      }      

      const array = [...state.getData];
      const item = array.find(x => x._id == state.dataEdit);

      axios.put(`/v1/users/${state.dataEdit}`, dataUser)
           .then(res => { 
            item.name = name
            item.noKursi = nokursi
            item.role = role
            item.hasilSwab = swab
            item.noHandphone = nohp
            item.statusKehadiran = kehadiran
            dispatch({type: DIALOG_EDIT_FALSE })
            dispatch({ type: ALERT_SUCCES_UPDATE})
            dispatch({ type: STOP_LOADING_UI })
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
      <div style={{marginLeft: '-3px'}}>
        { state.loadingData ? (<SkeletonLoading/>) : (
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
                          className={classes.selectInput}
                          value={role}
                          defaultValue=""
                          name="status"
                          onChange={(e) => setRole(e.target.value)}
                      
                          >
                          <MenuItem value={role} disabled>
                          {role}
                          </MenuItem>
                          <MenuItem value={'Pengurus'}>Pengurus</MenuItem>
                          <MenuItem value={'Tamu'}>Tamu</MenuItem>
                          <MenuItem value={'Spg'}>Spg</MenuItem>
                      </Select>
                  </FormControl>

                  <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="x2">Hasil Swab</InputLabel>
                    <Select
                          labelId="x2"
                          id="hasil-swab"
                          label="Hasil Swab"
                          className={classes.selectInput}
                          value={swab}
                          defaultValue=""
                          name="hasilswab"
                          onChange={(e) => setSwab(e.target.value)}
                  
                          >
                          <MenuItem value={'Belum Ada'}>Belum Ada</MenuItem>
                          <MenuItem value={'Negatif'}>Negatif</MenuItem>
                          <MenuItem value={'Positif'}>Positif</MenuItem>
                      </Select>
                  </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="x3">Status Kehadiran</InputLabel>
                    <Select
                          labelId="x3"
                          id="status-kehadiran"
                          label="Status Kehadiran"
                          className={classes.selectInput}
                          value={kehadiran}
                          defaultValue={kehadiran}
                          name="kehadiran"
                          onChange={(e) => setKehadiran(e.target.value)}
                          >
                          <MenuItem value={'Tidak Hadir'}>Tidak Hadir</MenuItem>
                          <MenuItem value={'Hadir'}>Hadir</MenuItem>
                      </Select>
                  </FormControl>

                  <Button 
                      variant="contained" 
                      color="primary" 
                      disabled={state.loading} 
                      onClick={handleSubmit} 
                      style={{marginTop: 20}}
                    >
                    {state.loading && (
                      <CircularProgress color="secondary" style={{position: 'absolute'}}/>
                    )}
                      simpan data
                  </Button>
                
              </Grid>
        )}
      
        </div>
     );
}
 
export default FormEdit;
