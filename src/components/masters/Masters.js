import React from 'react';
import {MASTERS_LIST} from "../../constatns";
import Icon from "../Icons";
import './_masters.scss';

function Masters() {
    return (
        <section className="masters section" id="masters">
            <div className="container br-lg">
                <div className="masters__content">
                <div className="section__heading">
                    <h2 className="section__title masters__title">
                    Masters
                    <span className="section__back-title">Masters</span>
                    </h2>
                </div>
                <ul className="masters__items">
                    {MASTERS_LIST.map(item => (
                        <li key={item.title} className="masters__item">
                            <div className="masters__photo">
                                <img src={item.src} alt="master" />
                                <div className="masters__info">
                                <ul className="social-networks">
                                    <li className="social-networks__item"> 
                                    <a className="social-networks__link" href="/">
                                        <Icon className="social-networks__icon social-networks__icon_white" name="facebook" />
                                    </a>
                                    </li>
                                    <li className="social-networks__item">
                                    <a className="social-networks__link social-networks__item_vertical" href="/">
                                    <Icon className="social-networks__icon social-networks__icon_white" name="twitter" />
                                    </a>
                                    </li>
                                    <li className="social-networks__item">
                                    <a className="social-networks__link" href="/">
                                    <Icon className="social-networks__icon social-networks__icon_white" name="instagram" />
                                    </a>
                                    </li>
                                </ul>
                                <div className="masters__about">
                                    <Icon className="social-networks__icon" name="more" />
                                    <span>About Master</span>
                                </div>
                                </div>
                            </div>
                            <h5 className="masters__name">{item.title}</h5>
                            <span className="masters__position">{item.position}</span>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </section>
    );
}

export default Masters;
