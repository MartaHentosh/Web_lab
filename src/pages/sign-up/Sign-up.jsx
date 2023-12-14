import React, { useState } from "react";
import Login from "../login/Login";
import { Navigate } from "react-router-dom";
import "./sign-up.css";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [emailError, setEmailError] = useState("");

    const loggedInUserIndex = localStorage.getItem("loggedInUserIndex");
    if (loggedInUserIndex) {
        return <Navigate to="/Home" />;
    }

    function isValidEmailFormat(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!username || !email || !password || !retypePassword) {
            setFlag(true);
            alert("Please fill every field");
        } else if (!isValidEmailFormat(email)) {
            setEmailError("Invalid email format");
        } else if (password.length < 6){
            setEmailError("Password must have at least 6 characters");
        } else {
            setFlag(false);

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            if (existingUsers.some(user => user.email === email)) {
                alert("Email is already taken. Please choose another.");
                return;
            }

            const newUser = {
                username,
                email,
                password,
            };

            existingUsers.push(newUser);

            localStorage.setItem("users", JSON.stringify(existingUsers));

            console.log("Saved in local storage");
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className="signup__page">
            {login ? (
                <form onSubmit={handleSubmit}>
                    <div className="signup__content">
                        <div className="sign__title">
                            <h1 className="signup__title">Register a new account</h1>
                        </div>
                        <input
                            className="signup__username"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        /><br />
                        <input
                            className={`signup__username ${emailError ? 'error' : ''}`}
                            type="text"
                            placeholder="E-mail"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(""); // Reset error on input change
                            }}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                        <br />
                        <input
                            className="signup__username"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        /><br />
                        <input
                            className="signup__username"
                            type="password"
                            placeholder="Retype password"
                            onChange={(e) => setRetypePassword(e.target.value)}
                        />
                        <p onClick={handleClick} className="signup__par">Already a member?
                            <a>  Sign in</a></p>
                        <button className="button__signup" type="submit">
                            Sign me up
                        </button>
                    </div>
                </form>
            ) : (
                    <Login />
                )}
        </div>
    );
}

export default SignUp;
