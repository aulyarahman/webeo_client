import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";



function pxToRem(value) {
    return `${value / 16}rem`;
  }

const breakpoints = createBreakpoints({});


const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    textField: {
      margin: '100px auto 10px auto',
      width: pxToRem(350),
      color:'red',
      [breakpoints.up("md")]: {
          fontSize: pxToRem(90),
  
      },
      [breakpoints.down("sm")]: {
          fontSize: pxToRem(50),
       
      }
    },
  }));


  export default useStyles;