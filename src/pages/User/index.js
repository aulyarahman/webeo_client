import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios'
import Header from "../../components/layout/Header";
import Footer from '../../components/layout/Footer';
import { 
    Grid,
    Typography
} from '@material-ui/core';
import { Route, Redirect, useHistory } from 'react-router-dom';

import UserInfo from '../../components/UserInfo';
import { SET_USER } from '../../utils/types';

import { Context } from '../../context';


import * as S from './styled';
import useStyles from './styleMui';



const UserPage = ({ style, styleTypo, headerstyle, footerstyle }) => {
    const classes = useStyles();
    let history = useHistory();
    const { state, dispatch } = useContext(Context);
    const [userData, setUserData] = useState([]);

    const token = localStorage.getItem('tokenUser')
    axios.defaults.headers.common['Authorization'] = token;

    useEffect(() => {
      
      axios.get('/v1/auth/me')
           .then(res => {
              dispatch({ type: SET_USER , value: res.data.data})
              setUserData(res.data.data)
                  
           })
           .catch(err => {
              //console.log(err.response)
           })

    }, [])

    return (
      <>
      { !token ? (<Redirect to='/login'/>) : (
        <S.DIV style={style}>
        <Header />
              <Grid 
                  container 
                  className={classes.form}
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  >
               <Grid item sm />
                      <Typography className={classes.pageTitle}>
                          <S.IMG src="/asset_hipmi/Logo.png" />
                      </Typography>

                      <Typography variant="h1" className={classes.pageTitle2} style={styleTypo}>
                          <span>PELANTIKAN</span><br/>
                          <span>PENGURUS BPD HIPMI</span><br/>
                          <span>SULAWESI SELATAN</span> <br/>
                          <span className={classes.small}>PERIODE 2020-2023</span>
                      </Typography>

              </Grid>

              <UserInfo />
          <Footer />

        </S.DIV>

      )       
      }
       
      </>
      );
}




 
export default UserPage;