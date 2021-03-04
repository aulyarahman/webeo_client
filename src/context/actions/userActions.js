import React, { useContext } from 'react';
import axios from 'axios';
import {
    SET_USER,
    AUTHENTICATION
} from '../../utils/types';
import { useHistory } from "react-router-dom";
import { Context } from '../../context';


const ROOT_HOST = 'http://localhost:5000'

export const loginAdminAuth = (userData) => {

    axios
        .post(`${ROOT_HOST}/api/v1/admin/login`, userData)
        .then(res => {
            setAuthorizationHeader(res.data.token)
    
        })
        .catch(err => {
            console.log(err)
        })
}

export const getDataUsers = () => {

    axios
        .get(`${ROOT_HOST}/api/v1/users`)
        .then(res => {
            console.log(res.data)
        })
}







export const setAuthorizationHeader = (token) => {
    const tokenAuth = `Bearer ${token}`;
    localStorage.setItem('tokenAuth', tokenAuth);
    axios.defaults.headers.common['Authorization'] = tokenAuth;
}