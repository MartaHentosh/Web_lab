import React from 'react';
import heroImg from '../../img/hero.jpg'
import './hero.css'

    const heroData =
        {
            imgSrc: heroImg,
            imgAlt: 'Hero',
            imgHeight: 380,
            imgWidth: 450,
            title: 'Welcome!',
            paragraph:
                'Keep your groceries at the perfect temperature and preserve their freshness with our wide selection of reliable refrigerators.From stylish to functional, youll find the perfect fit for your home.'
        }

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                    <div className="hero__content">
                        <img className='hero__image' src={heroData.imgSrc} alt={heroData.imgAlt} height={heroData.imgHeight} width={heroData.imgWidth} />
                        <div className='hero__text'>
                            <h1 className='hero__title'>
                                {heroData.title}
                            </h1>
                            <p className='hero__paragraph'>
                                {heroData.paragraph}
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Hero;

