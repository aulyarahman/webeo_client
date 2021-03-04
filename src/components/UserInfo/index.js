import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Typography from '@material-ui/core/Typography';
import GridList from "@material-ui/core/GridList";
import { Context } from '../../context';
import axios from 'axios'
import { useQRCode } from 'react-hook-qrcode';

import * as S from './styled';


function pxToRem(value) {
  return `${value / 16}rem`;
}

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
        marginTop: '-8px',
        [breakpoints.up("md")]: {
          fontSize: pxToRem(20),
          fontWeight: 'bold',
          
        }
      },
      p1 :{ 
        fontSize: pxToRem(15),
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '-10px',
        [breakpoints.up("md")]: {
          fontSize: pxToRem(20),
          fontWeight: 'bold',
          
        },
        [breakpoints.down("sm")]: {
          fontSize: pxToRem(15),
          fontWeight: 'bold',
          marginLeft: '-6%',       
        }
      },
      qrcode: {
        marginTop: '-20%',
        width: '134px',
        [breakpoints.down("sm")]: {
          width: '80%',        
          marginTop: '-4% !important'  ,
          marginLeft: '10% !important'
        },

      },

}));


function GridItem({ classes }) {

  const { state, dispatch } = useContext(Context);


    return (
    <>
      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper} >
            <span className={classes.title}>Nama</span><br/><p className={classes.p}>
              {state.user.name}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Status</span> <br/> <p className={classes.p}>
              {state.user.role}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>No Kursi </span><br/> <p className={classes.p}>
              {state.user.noKursi}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Hasil SWAB</span> <br/> <p className={classes.p}>
              {state.user.hasilSwab}
            </p>
        </div>
      </Grid>
    </>
    );
  }

const UserInfo = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Context);

  
    const [inputRef] = useQRCode({
      text: `${state.user.noHandphone}`,
      options: {
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#000',
          light: '#E6EDF2',
        },
      },
    });
    
    // <img ref={inputRef} />;
 
    return ( 
        <S.DIV>
            <Grid container alignItems="center" justify="center" spacing={0} >
              <GridItem classes={classes}/>

               {/* <Grid item xs={6} sm={10} md={12}>
                   <div className={classes.paper}>
                       <img alt="qrcode" ref={inputRef} className={classes.qrcode} style={{}}/> <br/>
                       {state.popupGuest ? null : (<p className={classes.p1}>{state.user.noHandphone}</p>)}
                       {state.spg ? null : (<p className={classes.p1}>{state.user.noHandphone}</p>)}
                     
                   </div>
               </Grid> */}

               <Grid>
                    <Typography className={classes.warm}>
                          <img alt="qrcode" ref={inputRef} className={classes.qrcode} style={{}}/>
                      </Typography>
                      <p className={classes.p1}>{state.user.noHandphone}</p>
                </Grid>

               
         
                  
            </Grid>
        </S.DIV>

     );
}
 
export default UserInfo;