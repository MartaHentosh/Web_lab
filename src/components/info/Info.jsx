import qualityImg from './../../img/quality.jpg'
import pricesImg from './../../img/prices.jpg'
import serviceImg from './../../img/service.jpeg'

import './info.css'

const Info = () => {
    return (
        <section className="info">
            <div className="info__items">
                <div className="info__part">
                        <img className="info__image" src={qualityImg} alt="quality photo"></img>
                        <h3 className="info__title">Quality</h3>
                        <p className="info__pharagraph">
                        We take pride in presenting technologically advanced models that ensure reliable preservation of your goods
                        </p>
                        
                </div>
                <div className="info__part">
                        <img className="info__image" src={pricesImg} alt="price photo"></img>
                        <h3 className="info__title">Price</h3>
                        <p className="info__pharagraph">
                        We offer cost-effective rates on all models,allowing everyone to find the perfect fit without straining their budget
                        </p>
                         
                </div>
                <div className="info__part">
                        <img className="info__image" src={serviceImg} alt="service photo"></img>
                        <h3 className="info__title">Service</h3>
                        <p className="info__pharagraph">
                        We strive to deliver excellent service and support at every stage of your purchase
                        </p>
                </div>
            </div>
        </section>
    );
}

export default Info;