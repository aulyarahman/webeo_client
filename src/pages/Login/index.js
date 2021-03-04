import React, {useState, useEffect, useContext} from 'react';
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Context } from '../../context';
import { AUTHENTICATION, LOADING_UI, STOP_LOADING_UI } from '../../utils/types'


import useStyles from './styleMui';
import * as S from './styled';

  
const Login = () => {
    const classes = useStyles();
    let history = useHistory();
    const { state, dispatch } = useContext(Context);
    const [noHandphone, setNoHandphone] = useState('');


    useEffect(() => { 

      localStorage.removeItem('tokenUser')

    }, [])

    const handleLogin = async (e) => {
    dispatch({type: LOADING_UI })
    e.preventDefault();
    const user = {
          noHandphone
      }
      try {
        const check = await axios.get(`/v1/auth/check/${noHandphone}`)
        if(check){
          axios.post('/v1/auth/login', user).then(res => {
                dispatch({ type: AUTHENTICATION })
                const tokenAuth = `Bearer ${res.data.token}`;
                localStorage.setItem('tokenUser', tokenAuth); 
                history.push('/');
                dispatch({ type: STOP_LOADING_UI })
          })
        }
      } catch (err) {
        dispatch({ type: STOP_LOADING_UI })
        history.push('/notfound')
      }
    }

    return ( 
        <>
            <Header />

        <S.DIV>

            <Grid 
                container 
                className={classes.form}
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                >
           <Grid/>
                      <Grid >
                            <Typography variant="h2" className={classes.pageTitle}>
                            <S.IMG src="/asset_hipmi/Logo.png" />
                            </Typography>
                             <TextField
          
                                id="input-with-icon-textfield"
                                label="No Handphone"
                                className={classes.textField}
                                variant="outlined"
                                value={noHandphone}
                                type="number"
                                onChange={(e) => setNoHandphone(e.target.value)}
                              />
                    </Grid>

                    <Grid >
                                <Button 
                                variant="contained" 
                                color="secondary"
                                onClick={handleLogin}
                                disabled={state.loading}
                                style={{
                                    width: '150px',
                                    marginTop: 15
                                }}>
                                  {state.loading && (
                                              <CircularProgress color="secondary" style={{position: 'absolute'}}/>
                                    )}
                                Login
                            </Button>
                    </Grid>

                  
                    <S.Ul>
                    <Typography className={classes.GridC}>

                        <li>Silahkan masukkan nomor handphone untuk memastikan status kepesertaan </li>
                        <li>Peserta yang dapat melalukan konfirmasi adalah yang terdaftar kedalam daftar  database panitia baik sebegai pengurus ataupun tamu undangan</li>
                        <li>Harap mengkonfirmasi kepada panitia pelaksana jika nomor handphone tidak terdaftar</li>

                     </Typography>
                    </S.Ul>

                
 
            </Grid>

    
            </S.DIV>

        <Footer />
        </>
     );
}
 
export default Login;