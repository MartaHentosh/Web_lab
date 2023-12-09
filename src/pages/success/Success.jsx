import React from "react";
import success from "../../img/success.svg"
import "./success.css"
import { NavLink } from "react-router-dom";

function Success() {
    return (
        <section>
            <div className="success">
                <img className="success__img" src={success} alt="success"></img>
                <h4 className="success__title">Success!</h4>
                <text className="success__description1">Your order was sent to processing!</text>
                <text className="success__description2">Check your email box for further information.</text>
                <NavLink className="button__goback" exact to={`/Catalog`}>
                    Go back to Catalog
                </NavLink>
            </div>
        </section>
    )
}

export default Success;