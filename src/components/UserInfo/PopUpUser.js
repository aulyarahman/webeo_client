import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Typography from '@material-ui/core/Typography';
import GridList from "@material-ui/core/GridList";
import { Context } from '../../context';
import axios from 'axios'
import { useQRCode } from 'react-hook-qrcode';
import { SCAN_POPUP_GUEST_FALSE, SCAN_POPUP_PENGURUS_FALSE } from '../../utils/types';


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
        marginTop: '-1px',
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
        marginTop: '-1%',
        width: '180px',
        [breakpoints.down("sm")]: {
          width: '80%',        
          marginTop: '-4% !important'  ,
          marginLeft: '10% !important'
        },

      },
      btnBack: {
        backgroundColor: '#E6EDF2', 
        color: '#000',
        marginLeft: '11%',
        fontWeight: 'bold',
        width: '80%'
      }

}));




function GridItem({ classes }) {

  const { state, dispatch } = useContext(Context);



    return (
    <>
      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper} >
            <span className={classes.title}>Nama</span><br/><p className={classes.p}>
              {state.spg.name}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Status</span> <br/> <p className={classes.p}>
              {state.spg.role}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>No Kursi </span><br/> <p className={classes.p}>
              {state.spg.noKursi}
            </p>
        </div>
      </Grid>

      <Grid item xs={6} sm={3} md={3}>
        <div className={classes.paper}>
            <span className={classes.title}>Hasil SWAB</span> <br/> <p className={classes.p}>
              {state.spg.hasilSwab}
            </p>
        </div>
      </Grid>
    </>
    );
  }

const PopUpUser = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Context);

    const handleBack = () => {
      dispatch({ type: SCAN_POPUP_GUEST_FALSE })
      dispatch({type: SCAN_POPUP_PENGURUS_FALSE })
    }
    
    const [inputRef] = useQRCode({
      text: `${state.spg.noHandphone}`,
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
    
 
    return ( 
        <S.DIV>
            <Grid container alignItems="center" justify="center" spacing={0}>
              <GridItem classes={classes}/>

                  {/* <img alt="qrcode" ref={inputRef} className="img-barcode"/> */}
                  <Grid>
                    <Typography className={classes.warm}>
                          <img alt="qrcode" ref={inputRef} className={classes.qrcode} style={{}}/>
                      </Typography>
                      <Button color="primary" className={classes.btnBack} onClick={handleBack}>Kembali</Button>
                </Grid>
                  
            </Grid>
        </S.DIV>

     );
}
 
export default PopUpUser;