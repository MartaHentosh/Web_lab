import heroImg from './../../img/hero.jpg'
import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                        <img className="hero__image" src={heroImg} alt="Hero" height={380} width={450} />
                    <div className='hero__text'>
                        <h1 className='hero__title'>
                            Welcome!
                        </h1>
                        <p className='hero__paragraph'>
                            Keep your groceries at the perfect temperature and preserve their 
                            {'\n'}freshness with our wide selection of reliable refrigerators.
                            {'\n'}From stylish to functional, you'll find the perfect fit for your home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;