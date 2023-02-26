import './App.css';
import React, { Component }  from 'react';
import Navbar from "./Component/navbar";
import Medicine from './Routes/medicine';
import Delivery from './Routes/delivery';
import Contact from './Routes/contact';
import Account from './Routes/accunt';
import Register from './Routes/register';
import Cart from './Routes/cart';
import {Route,Routes} from "react-router-dom";
import { useState } from 'react';


export default function App(){

  const [cart,setCart]=useState([]);
console.log(cart);

  const addToCart = (product) => {
    setCart([...cart,product]);
  }

  return(
    <div className='App'>
         
      <Routes>
        <Route path='/' element={<Medicine addToCart={addToCart} />}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Cart' element={<Cart cart={cart}/>}/>
      </Routes>
      <Navbar />
      </div>
  );
}
