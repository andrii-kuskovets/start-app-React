import React from 'react';
import Icon from "../Icons";
import './_about.scss';

function About() {
    return (
        <section className="about section" id="about">
            <div className="container br-lg">
                <div className="section__heading about__content">
                <div className="about__imgs">
                    <div className="about__img">
                        <img src={require("../../assets/img/card.png")} alt="card" />
                        <img src={require("../../assets/img/Adweek.gif")} alt="gif" className="about__back-img" />
                    </div>
                </div>
                <h2 className="section__title about__title">
                    About us
                    <span className="section__back-title">About</span>
                </h2>
                <ul className="social-networks social-networks_vertical">
                    <li className="social-networks__item social-networks__item_vertical"> 
                    <a className="social-networks__link" href="/">
                        <Icon className="social-networks__icon social-networks__icon_small" name="facebook" />
                    </a>
                    </li>
                    <li className="social-networks__item social-networks__item_vertical">
                    <a className="social-networks__link" href="/">
                        <Icon className="social-networks__icon social-networks__icon_small" name="twitter" />
                    </a>
                    </li>
                    <li className="social-networks__item social-networks__item_vertical">
                    <a className="social-networks__link" href="/">
                        <Icon className="social-networks__icon social-networks__icon_small" name="instagram" />
                    </a>
                    </li>
                </ul>
                <p className="section__paragraph about__paragraph">
                    Today, given the economic and labor market conditions, the best and least risky way to invest is to invest in personal assets and skills.
                    UI / UX Product Design Course covers all aspects of product design from product thinking and design to user-centric research and product 
                    research and business vision and digital marketing to product designers and creators, designing the end-user experience and interface of 
                    the product and how to deliver it. Includes.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;
