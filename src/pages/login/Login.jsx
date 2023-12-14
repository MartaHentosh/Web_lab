import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import './login.css'

function Login({ setLoggedUser }) {
    const [emaillog, setEmaillog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/Home" />;
    }


    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        if (existingUsers.length === 0) {
            setFlag(true);
            alert('User is not found. Please sign up.');
            return;
        }

        const user = existingUsers.find((user) => user.email === emaillog);

        if (!emaillog || !passwordlog || !user || user.password !== passwordlog) {
            setFlag(true);
            alert('Enter valid email and password.');
        } else {
            localStorage.setItem('loggedInUserIndex', existingUsers.indexOf(user));
            window.location.reload();
            setHome(!home);
            setFlag(false);

        }
    }
    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <section className="login__page">
                        <div className="login__content">
                            <h1 className="login__title">Submit the form to sign in</h1>
                            <input
                                className="login__email"
                                type="text"
                                placeholder="E-mail"
                                onChange={(event) => setEmaillog(event.target.value)}
                                required
                            />
                            <input
                                className="login__password"
                                type="password"
                                placeholder="Password"
                                onChange={(event) => setPasswordlog(event.target.value)}
                                required
                            />
                            <p className="login__par">Not a member?
                            <a className="sign__up" href={"/"}> Sign up</a></p>
                            <button className="button__login" type="submit">Login</button>
                        </div>
                    </section>
                </form>
            ) : (
                <Navigate to="/Home" />
            )}
        </div>
    );
}

export default Login;
