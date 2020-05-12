import React from 'react';
import {FAQ_ITEMS} from "../../constatns";
import Icon from "../Icons";
import './_faq.scss';

function FAQ() {
    return (
        <section className="faq section" id="faq">
            <div className="container">
                <div className="section__heading">
                <h2 className="section__title faq__title">
                    Frequently Asked Questions
                    <span className="section__back-title">FAQ</span>
                </h2>
                </div>
                <div className="faq__items">
                    {FAQ_ITEMS.map(item => (
                        <div key={item.title} className="faq__item br-xs">
                            <h3 className="faq__subtitle">{item.title}</h3>
                            <Icon className="faq__icon" name="plus" />
                            <p className="faq__paragraph">{item.answer}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
