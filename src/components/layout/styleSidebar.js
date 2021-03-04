import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#272727'
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: '#fff',
      color: '#9EACC0',
      alignItems: 'center',

    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,

    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),

    },

    img: {
      width: 'auto',
      height: '60px',
      float: 'left'
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7) !important',
      '&:hover,&:focus': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
        justifyContent: 'center'
    },
    drawerFooter: {
        // display: 'flex',
        // flexGrow:1,
        // width: '',
        position: 'relative',
        top: 'auto',
        bottom: 0,
        // backgroundColor: '#fff !important',
        // paddingTop: '0.5rem',
        boxSizing: 'border-box'
    },
    bottomPush: {
      position: 'fixed',
      bottom: 36,
      textAlign: "center",
      paddingBottom: 10,
      paddingLeft: 65,
      textDecoration: 'none', 
      color: '#272727',
  },
  bottomPushIcon: {
    bottom: 13,
    textAlign: "center",
    textDecoration: 'none', 
    marginTop: '780%',
    color: '#272727',
    
  }
  }));

export default useStyles;