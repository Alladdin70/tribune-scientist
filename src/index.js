import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import Root from './pages/Root';
import './index.css';


const initialState = {
  name : '',
  email: ''
};

const myReducer = (state=initialState,action) => {
  if(action.type === "CHANGE_EMAIL"){return {...state, email:action.payload.email}}
  if(action.type === "CHANGE_NAME"){return {...state, name:action.payload.name}}
  if(action.type === "CLEAR_FORM"){return {...state, name:action.payload.name, email:action.payload.email}}
  return state;
};

const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
