import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux"
import itemReducer from './features/ItemsSlice';
import App from './App';

const store = configureStore({
  reducer : {
    items: itemReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
