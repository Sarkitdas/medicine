import React from "react";
import './register.css';

function register()
{
    return(
        <>
        <div className="container">
            <div className="form">
            <i class="fa-solid fa-user-plus"></i>
            </div>
            <div className="from-control">
            <input type='text' placeholder="Name" id='Name' required></input>
            </div>
            <div className="from-control">
            <input type='text' placeholder="Address" id='Name' required></input>
            </div>
            <div className="from-control">
            <input type='text' placeholder="Phone/Email" id='Name' required></input>
            </div>
            <div className="from-control">
            <input type='password' placeholder="Password" id='Name' required></input>
            </div>
            <div>
            <button className="submit">Submit</button>
            </div>
        </div>
        </>
    );

}

export default register;