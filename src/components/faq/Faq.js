import React, {useState} from 'react';
import {FAQ_ITEMS} from "../../constatns";
import Icon from "../Icons";
import './_faq.scss';

function FAQ() {
    const [active, setActiveBlock] = useState("");
    
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
                    {FAQ_ITEMS.map((item, i) => (
                        <div key={i} className={`faq__item br-xs ${active === i}`} onClick={() => {
                            setActiveBlock(active === i ? "" : i)
                        }}>
                            <h3 className="faq__subtitle">{item.question}</h3>
                            <Icon className={active === i ? 'faq__icon faq__icon_active' : 'faq__icon' } name="plus" />
                            <p className={active === i ? 'faq__paragraph faq__paragraph_active' : 'faq__paragraph' }>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
