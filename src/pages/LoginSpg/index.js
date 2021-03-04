import React, { useState, useEffect, useContext} from 'react';
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import * as S from './styled';
import PopUpAlert from '../../components/PopUp/PopupSucces';
import PopUpAlertFailed from '../../components/PopUp/PopupFailed';



function pxToRem(value) {
    return `${value / 16}rem`;
  }
const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({

    form: {
        textAlign: 'center',
        marginTop: '-20px',
        [breakpoints.up('xl')] : {
          marginTop: '5%',
        },
        [breakpoints.up('md')] : {
          marginTop: '5%',
        },

      },
      imgLogo: {
        [breakpoints.up('md')] : {
          width: '130px !important',
          height: '140px !important'
        },
        [breakpoints.up('xl')] : {
          width: '290px !important',
          height: '350px !important'
        },
      },
      pageTitle: {
        margin: '50px auto 10px auto'
      },
      GridC: {
        marginLeft: '-20px', 
        color: '#A8B5C7',
        width: 'auto',
        fontSize: pxToRem(11),
        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(15)
        }
      },
    
  }));

  
const LoginSpg = () => {
    const classes = useStyles();

    return ( 
        <S.DIV id="login-spg">
        <Header />
            <Grid 
                container 
                className={classes.form}
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                >
           <Grid/>
                <Grid item sm>
                    <Typography variant="h2" className={classes.pageTitle}>
                       <S.IMG src="/asset_hipmi/Logo.png" className={classes.imgLogo}/>
                     </Typography>
                       <PopUpAlert />
                 </Grid>
                  
                    <S.Ul>
                    <Typography className={classes.GridC}>

                        <li>Silahkan scan bardcode untuk memastikan status kepesertaan </li>
                        <li>Peserta yang dapat masuk keruangan adalah peserta yang datanya telah terdaftar dan hasil swap nya dinyatakan negatif</li>
                      

                     </Typography>
                    </S.Ul>     
            </Grid>
            <Footer />
          </S.DIV>
       
  
     );
}
 
export default LoginSpg;