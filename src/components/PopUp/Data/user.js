import React, { useState, useEffect, useContext } from 'react';
import { 
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as S from './style';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Context } from '../../../context';

import PopUpUser from '../../UserInfo/PopUpUser';

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        margin: '50px auto 10px auto',
        color: '#292964',      
      },
    pageTitle2: {
       margin: '10px auto 10px auto',
       fontWeight: 'bold',
       color: '#292964',
       fontSize: '4.2vw',
       fontStretch: 'expanded',
       [breakpoints.up("md")]: {
         fontSize: '2vw'
       }
     },
    small: {

      [breakpoints.up("md")]: {
        fontSize: pxToRem(10)
      },
      [breakpoints.down("sm")]: {
        fontSize: pxToRem(8),
      }
    },
    pageTitle3: {
       margin: '15px auto 10px auto',
       fontWeight: 'bold',
       fontSize: '16px',
       color: '#292964'
      },
    form: {
       textAlign: 'center'
     },

}));

const UserPage = ({ style, styleTypo }) => {
    const classes = useStyles();
    const { state, dispatch } = useContext(Context);

    return (
      <>
        <S.DIV style={style}>
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

                <PopUpUser />

        </S.DIV>
      </>
      );
}
 
export default UserPage;