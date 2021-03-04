import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
    return `${value / 16}rem`;
  }
  
  const breakpoints = createBreakpoints({});
  
  const useStyles = makeStyles((theme) => ({
      pageTitle: {
          margin: '50px auto 10px auto',
          color: '#292964'
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
  

  export default useStyles