import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginAdmin from '../../pages/LoginAdmin';
import Grid from '@material-ui/core/Grid';

import * as S from './styled';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const useStyles = makeStyles({
  root: {
    width: 800,
    borderRadius: 40,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardLogin() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
        <Header classx={{display: 'none'}}/>
         <S.DIV>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                className="grid-c"
                >

                <Card className={classes.root}>
                <CardContent>
                  <Grid>
                  <LoginAdmin />

                  </Grid>
                </CardContent>
             </Card>
          </Grid>
        </S.DIV>
        <Footer classx={{display: 'none'}}/>
    </>
  );
}