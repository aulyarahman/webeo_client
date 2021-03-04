import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../context';
import { Route, Redirect } from 'react-router-dom';

import axios from 'axios'
// components

import Sidebar from '../../components/layout/Sidebar';
import Tables from '../../components/Tables/Tables';
import DialogAdd from '../../components/DialogAdd';
import  {AlertSnackBar, AlertSnackBarFailed}  from '../../components/Alert'
import AlertSnackBarUpdate  from '../../components/Alert/update';
import {AlertSnackBarDelete} from '../../components/Alert/delete';
import { DIALOG_ADD, AUTHENTICATION } from '../../utils/types';

import * as S from './styled';

const useStyles = makeStyles((theme) => ({

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#e9eff3',
      height: '100vh'

    },
    tableOverflow: {
        overflow: 'auto'
    },
}));



const ViewDashboard = () => {
    const { state, dispatch } = useContext(Context);
    const classes = useStyles();


    const handleAddMember = () => {
        dispatch({
            type: DIALOG_ADD
        })
 
}
    return (
        
        <div style={{backgroundColor: '#E9EFF3', height: '500px'}}>
                { state.dialogAddForm ? (<DialogAdd />) : null }
                { state.alertSucces ? (<AlertSnackBar />) : null }
                { state.alertSuccesUpdate ? (<AlertSnackBarUpdate />) : null }
                { state.alertSuccesDelete ? (<AlertSnackBarDelete />) : null }
                

                <Sidebar />
                <S.DIV>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                        <Button 
                                variant="contained" 
                                style={{
                                    backgroundColor: '#109CF1', 
                                    color: '#fff', 
                                    textTransform: 'capitalize',
                                    
                                }}
                                onClick={handleAddMember}
                                >
                            Tambah User
                        </Button>
                    </Box>
            
                        <Grid container spacing={4} style={{marginTop: '-20px'}}>
                            <Grid item xl={12} className="grid-table">
                                <Tables />
                            </Grid>
                        </Grid>
            </main>
            </S.DIV>
         </div>
    
    )
}
   



const Dashboard = () => {
    const { state, dispatch } = useContext(Context);
    const token = localStorage.tokenAuth;
    axios.defaults.headers.common['Authorization'] = token;
    return ( 
        <>
           { token ? (<ViewDashboard />) : (<Redirect to='/login/admin'/>) }
         </>
     );
}
 
export default Dashboard;