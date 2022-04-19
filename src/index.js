import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainReducer";
const store=configureStore({
  reducer:mainReducer
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();