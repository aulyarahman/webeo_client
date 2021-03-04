import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import themeFile from './utils/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Provider } from "./context";

// pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UserPage from './pages/User';
import LoginSpg from './pages/LoginSpg';
import CardLogin from './components/CardLogin';
import PageUserNotFound from './components/UserInfo/404';

import DialogImportFromExcel from './components/DialogImport';



const theme = createMuiTheme(themeFile);




const App = () => {

    return ( 
        <Provider>
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={UserPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/notfound" component={PageUserNotFound} />
                    <Route exact path="/login/admin" component={CardLogin} />
                    <Route exact path="/login/spg" component={LoginSpg} />
                </Switch>
            </Router>
        </MuiThemeProvider>
        </Provider>
     );
}
 
export default App;
