import ReactDOM from 'react-dom/client';
import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export const getcart=()=>{
  return fetch('https://dummyjson.com/carts/1').then(res => res.json())

}
