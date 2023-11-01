import './footer.css'
import fridgelogoImg from "../../img/fridgelogo.svg";
import facebookImg from "../../img/facebook.svg";
import twitterImg from "../../img/twitter.svg";
import instaImg from "../../img/insta.svg";
import linkedinImg from "../../img/linkedin.svg";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__part1">
                    <div className="footer__text">
                        <div className="footer__title">
                            Branding stuff
                        </div>
                        <div className="footer__desc">
                            Something here
                        </div>
                    </div>
                    <div className="footer__logo">
                        <img src={fridgelogoImg} alt="Logo" height={60} width={60}/>
                    </div>
                    <div className="footer__socials">
                        <img src={facebookImg} alt="facebook" height={40} width={40}/>
                        <img src={twitterImg} alt="twitter" height={40} width={40}/>
                        <img src={instaImg} alt="instagram" height={40} width={40}/>
                        <img src={linkedinImg} alt="linkedin" height={40} width={40}/>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__part2">
                    2023 IoT @Copyright all rights reserved
                </div>
            </div>
        </section>
    );
}

export default Footer;