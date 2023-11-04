import React from 'react';
import qualityImg from './../../img/quality.jpg'
import pricesImg from './../../img/prices.jpg'
import serviceImg from './../../img/service.jpeg'

import './info.css'

const infoData = [
    {
        imgSrc: qualityImg,
        alt: "quality photo",
        title: "Quality",
        text: "We take pride in presenting technologically advanced models that ensure reliable preservation of your goods"
    },
    {
        imgSrc: pricesImg,
        alt: "price photo",
        title: "Price",
        text: "We offer cost-effective rates on all models, allowing everyone to find the perfect fit without straining their budget"
    },
    {
        imgSrc: serviceImg,
        alt: "service photo",
        title: "Service",
        text: "We strive to deliver excellent service and support at every stage of your purchase"
    }
];
function Info () {
    return (
        <section className="info">
            <div className="info__items">
                {infoData.map((info, index) => (
                    <div className="info__part" key={index}>
                        <img className="info__image" src={info.imgSrc} alt={info.alt} />
                        <h3 className="info__title">{info.title}</h3>
                        <p className="info__pharagraph">{info.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Info;
