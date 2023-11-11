import React from "react";
import { NavLink } from "react-router-dom";
import fridge1 from './fridgeImages/fridge1.jpg'
import fridge2 from './fridgeImages/fridge2.jpg'
import fridge3 from './fridgeImages/fridge3.jpg'
import fridge4 from './fridgeImages/fridge4.jpg'
import fridge5 from './fridgeImages/fridge5.jpg'
import fridge6 from './fridgeImages/fridge6.jpg'
import './elementsList.css'

const elementsData = [
    {
        id: 1,
        imgSrc: fridge1,
        type: "Yellow Fridge",
        description: "Soft rounded curves combined with vibrant or pastel colours create real character in the kitchen.",
        brand: "Samsung",
        price: 1500,
    },

    {
        id: 2,
        imgSrc: fridge2,
        type: "Yellow Fridge",
        description: "A new Samsung BESPOKE Fridge with custom panels allows you to customize type for your stylish design.",
        brand: "Samsung",
        price: 1900,
    },

    {
        id: 3,
        imgSrc: fridge3,
        type: "Multicolor Fridge",
        description: "Renovating your kitchen? Make sure the refrigerator fits your style too! Choose your color and buy it.",
        brand: "Philipes",
        price: 2699,
    },

    {
        id: 4,
        imgSrc: fridge4,
        type: "Multicolor Fridge",
        description: "A monochrome fridge is so 2020. The new BESPOKE 4-Door Flex™ refrigerator comes in a range of colors.",
        brand: "Philipes",
        price: 2100,
    },

    {
        id: 5,
        imgSrc: fridge5,
        type: "Black Fridge",
        description: "Family Hub is designed to store more of everything for the whole family with a modern look to match your kitchen style.",
        brand: "Philipes",
        price: 2999,
    },

    {
        id: 6,
        imgSrc: fridge6,
        type: "Grey Fridge",
        description: "Reduce your food waste successfully with this inspiring, motivating post on How To Organize Your Fridge.",
        brand: "Samsung",
        price: 3000,
    },
];

function Elements () {
    return (
        <section className="elements">
            <div className="elements_list">
                {elementsData.map((element, idx) => (
                    <div className="elements__part" key={idx}>
                    <img className="elements__image" src={element.imgSrc} />
                    <h3 className="elements__type">{element.type}</h3>
                    <p className="elements__description">{element.description}</p>
                    <p className="elements__brand">{element.brand}</p>
                    <p className="elements__price">{element.price} $</p>
                    <NavLink className="elements__button" exact to={`/Catalog/${element.id}`}>View more</NavLink>
                </div>
                ))}
                
            </div>
        </section>
    );
};

export default Elements;