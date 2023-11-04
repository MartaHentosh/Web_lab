import React from 'react';
import fridgelogoImg from '../../img/fridgelogo.svg'
import { Link } from "react-router-dom";

import './header.css'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={fridgelogoImg} alt="Logo" height={60} width={60}/>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><Link exact to="/Home">Home</Link></li>
                            <li><Link exact to="/Catalog">Catalog</Link></li>
                            <li><Link exact to="/Cart">Cart</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;