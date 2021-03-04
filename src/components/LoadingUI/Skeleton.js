import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 440,
  },
});

export default function SkeletonLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave"/>
      <Skeleton variant="rect" width={440} height={118} />
      <Skeleton variant="rect" animation="wave"  width={440} height={118} />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave"  width={440} height={50} />

    </div>
  );
}