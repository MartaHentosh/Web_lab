import React from 'react';
import fridgelogoImg from '../../img/fridgelogo.svg'
import { Link, useNavigate } from "react-router-dom";

import './header.css'

function Header ({setLoggedUser}) {
    const navigate = useNavigate();

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = loggedInUserIndex !== null ? users[loggedInUserIndex] : null;

    const handleLogout = () => {
        if (loggedInUserIndex !== null) {
            //users.splice(loggedInUserIndex, 1);

           // localStorage.setItem("users", JSON.stringify(users));

            localStorage.removeItem("loggedInUserIndex");
            setLoggedUser(null);
            navigate("/");
            console.log('navigating to signup')


            console.log(`${loggedInUser.name} has signed out.`);
        }
    };
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
                    <div className='button-out'>
                    <button className='sign-out' onClick={handleLogout}>Sign out me!</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;