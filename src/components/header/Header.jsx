import fridgelogoImg from '../../img/fridgelogo.svg'

import './header.css'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={fridgelogoImg} alt="Logo" height={60} width={60}/>
                        {/* <span>My Fridges</span> */}
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Catalog</a></li>
                            <li><a href="">Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;