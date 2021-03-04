import React, {useState, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';
import { AlertSnackBarFailedLogin } from '../../components/Alert'
import { Context } from '../../context';
import { useHistory } from "react-router-dom";

import { LOADING_UI, STOP_LOADING_UI, SET_ERRORS, CLEAR_ERRORS, ALERT_ERROR } from '../../utils/types';

import { loginAdminAuth } from '../../context/actions/userActions';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardLogin: {
      width: '500px',
      marginTop: '100px'
  }
}));

const LoginAdmin = ({ }) => {
  const classes = useStyles();
  let history = useHistory();
  const { state, dispatch } = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    dispatch({ type: LOADING_UI })

    e.preventDefault();
    const userData = {
      username,
      password,
    };
    
    axios.post('/v1/admin/login', userData)
          .then(res => {
            dispatch({ type: STOP_LOADING_UI });
            const tokenAuth = `Bearer ${res.data.token}`;
            localStorage.setItem('tokenAuth', tokenAuth);
            history.push("/dashboard");
          })
          .catch(err => {
            const error = err.response.data.error
            dispatch({type: SET_ERRORS, value: error })
            dispatch({ type: STOP_LOADING_UI })
            dispatch({ type: ALERT_ERROR })
          })
    
  }


  return (
      <>
      { state.alertError ? (<AlertSnackBarFailedLogin />) : null }
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
     
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={state.loading}
          >
             {state.loading && (
                      <CircularProgress color="secondary" style={{position: 'absolute'}}/>
            )}
            Sign In
          </Button>
        </form>
      </div>
   
      <Box mt={8}>
       
      </Box>
    </Container>
   
    </>
  );
}


export default LoginAdmin;