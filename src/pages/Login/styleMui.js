import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
    return `${value / 16}rem`;
  }

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    form: {
        textAlign: 'center',
        marginTop: '-20px',
        [breakpoints.up('xl')] : {
          marginTop: '220px',
        },
    

      },
      pageTitle: {
        margin: '50px auto 10px auto'
      },
      textField: {
        margin: '100px auto 10px auto',
        width: pxToRem(350),
        [breakpoints.up("md")]: {
            fontSize: pxToRem(90),
            marginTop: '10%',

        },
        [breakpoints.down("sm")]: {
            fontSize: pxToRem(50),
            marginTop: '10%'
         
        }
      },
      GridC: {
        paddingTop: 10,
        paddingLeft: 1,
        marginLeft: '-20px', 
        color: '#A8B5C7',
        width: 'auto',
        fontSize: pxToRem(11),
        
        [breakpoints.up("md")]: {
          fontSize: pxToRem(13),
        
        }
      },
    
  }));


  export default useStyles