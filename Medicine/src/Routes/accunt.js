import React from 'react';
import { Link } from 'react-router-dom';
import './account.css';

const account= () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit="">
                <div className='form-control'>
                    <label className='title'>Email</label>
                    <input type='email' name='email' required></input>
                </div>
                <div className='form-control'>
                    <label className='title'>Password</label>
                    <input type='password' name='password' required></input>
                </div>
                <button className='btn-submit' type='submit'>Submit</button>
            </form>
            <p className='register-para'>Don't have any account? Please <Link to='/register' className='link'>Register</Link></p>
        </div>
    );
};
export default account;