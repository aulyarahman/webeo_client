import { useState, useEffect, useReducer, createContext } from "react";
import dataReducer from "./reducers/reducers";
import dataUserReducer from './reducers/dataReducer';
import userReducer from './reducers/userReducer';

// initial state
const initialState = {
  dialogEditForm: false,
  dialogHapusForm: false,
  dialogAddForm: false,
  alertSucces: false,
  alertError: false,
  alertSuccesUpdate: false,
  alertSuccesDelete: false,
  loading: false,
  loadingData: false,
  popupFailed: false,
  popupGuest: false,
  popupPeng: false,
  scanUserNotFound: {},

  errorResponse: {},

  allData: [],

  user: {},
  authenticated: false,

  spg: {},

  getData: [],
  dataEdit: {},
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(dataReducer, dataUserReducer, userReducer), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };