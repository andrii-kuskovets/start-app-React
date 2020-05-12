import React from 'react';
import Icon from "../Icons";
import './_footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                <ul className="social-networks">
                    <li className="social-networks__item"> 
                    <a className="social-networks__link" href="/">
                        <Icon className="social-networks__icon social-networks__icon_small" name="facebook" />
                    </a>
                    </li>
                    <li className="social-networks__item">
                    <a className="social-networks__link" href="/">
                    <Icon className="social-networks__icon social-networks__icon_small" name="twitter" />
                    </a>
                    </li>
                    <li className="social-networks__item">
                    <a className="social-networks__link" href="/">
                    <Icon className="social-networks__icon social-networks__icon_small" name="instagram" />
                    </a>
                    </li>
                </ul>
                <div className="logo">
                    <a href="/">
                        <Icon className="logo__icon" name="logo" />
                    </a>
                </div>
                <div className="footer__phone">
                    <span>Contact Number: </span>
                    <a href="tel:09121234567"> 0912-1234567</a>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
