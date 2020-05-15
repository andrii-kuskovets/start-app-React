import React, {useState} from 'react';
import Icon from "../Icons";
import {TABS} from "../../constatns";
import experienceImg from '../../assets/img/banner.png';
import './_experience.scss';

function Experience() {
    const [activeTab, setActiveTab] = useState(TABS[0].id); 

    return (
        <section className="experience section" id="experience">
            <div className="container br-lg">
                <div className="experience__content">
                <div className="section__heading">
                    <h2 className="section__title experience__title">
                    Course Experience
                    <span className="section__back-title section__back-title_small">Experience</span>
                    </h2>
                </div>
                <img className="experience__img" src={experienceImg} alt="banner" />
                <div className="experience__tabs tabs">
                    <ul className="tabs__list-desktop js_tab-list-desktop">
                        {TABS.map(i => (
                            <li key={i} onClick={() => setActiveTab(i.id)} className={activeTab === i.id ? "tabs__name tabs__name_active" : "tabs__name"}><span>{i.title}</span></li>
                        ))}
                    </ul>
                    <ul className="tabs__items">
                        {TABS.map(i => (
                            <li key={i} className="tabs__item tabs__item_active">
                                <div onClick={() => setActiveTab(i.id)} className={activeTab === i.id ? "tabs__name tabs__name_active" : "tabs__name"}>
                                    <span>{i.title}</span>
                                    <Icon className={activeTab === i.id ?'tabs__icon tabs__icon_active' : 'tabs__icon'} name="arrow" />
                                </div>
                                <div className={activeTab === i.id ? 'tabs__description tabs__description_active' :'tabs__description'}>
                                    <img src={experienceImg} alt="banner" />
                                    <p className="tabs__paragraph">{i.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
