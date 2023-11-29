import React, { useState } from 'react';
import qualityImg from '../../img/quality.jpg';
import pricesImg from '../../img/prices.jpg';
import serviceImg from '../../img/service.jpeg';
import info4Img from '../../img/info4.jpg';
import info5Img from '../../img/info5.jpg';
import info6Img from '../../img/info6.jpg';
import './info.css';
import Button from '../button/Button';

const infoData = [
    {
        imgSrc: qualityImg,
        alt: 'quality photo',
        title: 'Quality',
        text: 'We take pride in presenting technologically advanced models that ensure reliable preservation of your goods',
    },
    {
        imgSrc: pricesImg,
        alt: 'price photo',
        title: 'Price',
        text: 'We offer cost-effective rates on all models, allowing everyone to find the perfect fit without straining their budget',
    },
    {
        imgSrc: serviceImg,
        alt: 'service photo',
        title: 'Service',
        text: 'We strive to deliver excellent service and support at every stage of your purchase',
    },

    {
        imgSrc: info4Img,
        alt: '4 photo',
        title: 'Element 1',
        text: 'Description for Element 1',
    },
    {
        imgSrc: info5Img,
        alt: '5 photo',
        title: 'Element 2',
        text: 'Description for Element 2',
    },
    {
        imgSrc: info6Img,
        alt: '6 photo',
        title: 'Element 3',
        text: 'Description for Element 3',
    },
];


const Info = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section className="info">
            <div className="info__items">
                {infoData.slice(0, showMore ? infoData.length : 3).map((info, index) => (
                    <div className="info__part" key={index}>
                        <img className="info__image" src={info.imgSrc} alt={info.alt} />
                        <h3 className="info__title">{info.title}</h3>
                        <p className="info__pharagraph">{info.text}</p>
                    </div>
                ))}
            </div>
            <Button showMore={showMore} setShowMore={setShowMore} />
        </section>
    );
};
export default Info;
