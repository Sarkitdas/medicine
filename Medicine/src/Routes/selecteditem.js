import React, { useState } from "react";
import {cart} from '../app';
const Selecteditem=()=>{
    return(
        <div className="container">
            <img src={cart.img} alt=''></img>
            <h1>{cart.title}</h1>
            <h2>{cart.price}</h2>
        </div>
    )
}
export default Selecteditem; 