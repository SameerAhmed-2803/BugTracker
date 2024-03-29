import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import App from './App';

//Redicers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'

//Redux Configure
const reducer = combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
})

const store = configureStore({
    reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
     <App />   
    </Provider>
    ,
);


