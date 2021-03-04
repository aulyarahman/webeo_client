import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { Context } from '../../context';


import * as S from './styled';


function pxToRem(value) {
  return `${value / 16}rem`;
}

const noWhatsApp = '095656565'

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        [breakpoints.up("md")]: {
          textAlign: "center",
        },
        [breakpoints.down("sm")]: {
          textAlign: "left",
          marginLeft: '24%',
          height: '50px'
        },
        
      },
      itemFlexGrow: {
        flexGrow: 1,
        border: "1px solid red"
      },
      title: {
        [breakpoints.up("md")]: {
          fontSize: pxToRem(13)
        },
        [breakpoints.down("sm")]: {
        fontSize: "2.5vw",
          marginTop: '-20px'
        }
      },
      p: {
        fontSize: pxToRem(15),
        fontWeight: 'bold',
        textTransform: 'uppercase',
        [breakpoints.up("md")]: {
          fontSize: pxToRem(20),
          fontWeight: 'bold',
          
        }
      },

      warm: {
        textAlign: 'center',
      },

      buttonWaa: {
        backgroundColor: '#109CF1', 
        color: '#fff',   
        left: '33%',
        right: '50%' 
      }
  

}));


const handleWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${noWhatsApp}`, "_blank");
}

function GridItem({ classes }) {

  const { state, dispatch } = useContext(Context);


    return (
    <>
      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper} >
            <span className={classes.title}>Nama</span><br/><p className={classes.p}>
              -
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Status</span> <br/> <p className={classes.p}>
             -
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>No Kursi </span><br/> <p className={classes.p}>
              -
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Hasil SWAB</span> <br/> <p className={classes.p}>
              -
            </p>
        </div>
      </Grid>
    </>
    );
  }

const UserInfoNotFound = () => {
    const classes = useStyles(); 
    return ( 
        <S.DIV>
            <Grid container alignItems="center" justify="center" spacing={0} >
              <GridItem classes={classes}/>

              <Grid>

              <Typography className={classes.warm}>
                Mohon Maaf Anda Tidak Terdaftar <br/>
                 Silahkan Hubungi Admin Untuk Melakukan Pendaftaran
                </Typography>
                  <Button
                  onClick={handleWhatsapp}
                  className={classes.buttonWaa}
                  >Hubungi Admin
                  </Button>
                </Grid>
           
                  
                  
            </Grid>
        </S.DIV>

     );
}
 
export default UserInfoNotFound;