import React from "react";
import FridgeList from "./FridgeList";
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
        type: "Computer Desk",
        description: "Soft rounded curves combined with vibrant or pastel colours create real character in the kitchen.",
        brand: "Samsung",
        price: 999,
    },

    {
        id: 2,
        imgSrc: fridge2,
        type: "Kitchen Table",
        description: "A new Samsung BESPOKE Fridge with custom panels allows you to customize type for your stylish design.",
        brand: "Samsung",
        price: 2500,
    },

    {
        id: 3,
        imgSrc: fridge3,
        type: "Coffee Table",
        description: "Renovating your kitchen? Make sure the refrigerator fits your style too! Choose your color and finish to make the BESPOKE 4-Door Flex™ your own.",
        brand: "Philipes",
        price: 1699,
    },

    {
        id: 4,
        imgSrc: fridge4,
        type: "Computer Desk",
        description: "Renovating your kitchen? Make sure the refrigerator fits your style too! Choose your color and finish to make the BESPOKE 4-Door Flex™ your own.",
        brand: "Philipes",
        price: 2100,
    },

    {
        id: 5,
        imgSrc: fridge5,
        type: "Kitchen Table",
        description: "Family Hub is designed to store more of everything for the whole family with a modern look to match your kitchen style.",
        brand: "Philipes",
        price: 850,
    },

    {
        id: 6,
        imgSrc: fridge6,
        type: "Coffee Table",
        description: "Reduce your food waste successfully with this inspiring, motivating post on How To Organize Your Fridge - A 6 Step Guide.",
        brand: "Samsung",
        price: 800,
    },
];

function Elements () {
    return (
        <section className="elements">
            <div className="elements_list">
                {elementsData.map((elementsData, idx) => (
                    <div className="info__part" key={idx}>
                    <img className="info__image" src={elementsData.imgSrc} alt={elementsData.alt} />
                    <h3 className="info__title">{elementsData.type}</h3>
                    <p className="info__pharagraph">{elementsData.description}</p>
                    <p className="info__pharagraph">{elementsData.brand}</p>
                    <p className="info__pharagraph">{elementsData.price}</p>

                </div>
                    // <DeskList
                    //     id={fridgeData.id}
                    //     imageSrc={fridgeData.imageSrc}
                    //     type={fridgeData.type}
                    //     description={fridgeData.description}
                    //     material={fridgeData.material}
                    //     price={fridgeData.price}
                    // />
                ))}
            </div>
        </section>
    );
};

export default Elements;