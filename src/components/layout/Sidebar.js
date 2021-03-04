import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { v4 as uuidv4 } from 'uuid';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// style
import useStyles from './styleSidebar';



function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const LINK = ({ to, style, body }) => (
    <Link to={to} style={style}>
        {body}
    </Link>
  )


  const handleLogout = () => {
    localStorage.removeItem('tokenAuth');
    history.push("/login/admin");
  }
  
  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
          <ListItem style={{marginTop: '-50px', color: '#272727'}}>
            <img src="/09B-1User-512.webp" className={classes.img}/>
            <span 
                style={{
                    textTransform: 'capitalize', 
                    paddingLeft: 20,
                  }}>
              <p>Admin</p>
              <p style={{fontSize: '13px', fontWeight: 'lighter', paddingTop: '-5'}}>Administrator</p>
            </span>

   
          </ListItem>
   
      <Divider />
      <List>
        {['Data Anggota',"Logout"].map((text, index) => (
          <div key={uuidv4()}>
          
          {
            index % 2 === 0 ?
            <Link to='/dashboard' style={{ textDecoration: 'none', color: '#272727'}}> 
              <ListItem button key={text} >
               <ListItemIcon> 
                   <DashboardIcon />     
                </ListItemIcon>
               <ListItemText 
                 primary={text} 
                 style={{
                   textTransform: 'capitalize', 
                   fontSize: '14px',
                 }} />
               </ListItem> 
            </Link>
       
               :
            <Link to='/login/admin' style={{ textDecoration: 'none', color: '#272727'}} onClick={handleLogout}> 
              <ListItem button key={text} >
               <ListItemIcon> 
                   <ExitToAppIcon />     
                </ListItemIcon>
               <ListItemText 
                 primary={text} 
                 style={{
                   textTransform: 'capitalize', 
                   fontSize: '14px',
                 }} />
               </ListItem> 
             </Link>
               
          }
               
               </div>
        ))}

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{fontSize: '1.2vw'}}> 
            Dashboard BPD HIPMI Sulawesi Selatan
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">

        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    
    </div>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;