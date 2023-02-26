import React, { Component }  from 'react';
import "./navbar"
import { MenuItem } from "./menuItem";
import './navbarstyle.css'
import { Link } from "react-router-dom"

class navbar extends Component{
    state={clicked:false};
    handleClick= () =>
    {
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="navbar-Item">
                <h1 className="navbar-logo">Pharmacy</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ?  "navbar-Menu active" : "navbar-Menu"}>
                    {MenuItem.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <div className="cartt">
                        <Link style={{textDecoration:'none'}} to='/cart'>
                    <span>
                                <i className="fas fa-cart-plus"></i>
                    </span>
                    </Link>
                    <span>0</span>
                    </div>
                </ul>
            </nav>
        );
    }
}
export default navbar;
