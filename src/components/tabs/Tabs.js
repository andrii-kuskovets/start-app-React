import React, {useState} from 'react';
import Icon from "../Icons";
import {TABS} from "../../constatns";
import experienceImg from '../../assets/img/banner.png';
import './_tabs.scss';

function Tabs() {
    const [activeTab, setActiveTab] = useState(TABS[0].id); 

    return (
        <div className="experience__tabs tabs">
            <ul className="tabs__list-desktop">
                {TABS.map(item => (
                    <li key={item.id} onClick={() => setActiveTab(item.id)} className={activeTab === item.id ? "tabs__name tabs__name_active" : "tabs__name"}><span>{item.title}</span></li>
                ))}
            </ul>
            <ul className="tabs__items">
                {TABS.map(item => (
                    <li key={item.id} className="tabs__item tabs__item_active">
                        <div onClick={() => setActiveTab(item.id)} className={activeTab === item.id ? "tabs__name tabs__name_active" : "tabs__name"}>
                            <span>{item.title}</span>
                            <Icon className={activeTab === item.id ?'tabs__icon tabs__icon_active' : 'tabs__icon'} name="arrow" />
                        </div>
                        <div className={activeTab === item.id ? 'tabs__description tabs__description_active' :'tabs__description'}>
                            <img src={experienceImg} alt="banner" />
                            <p className="tabs__paragraph">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tabs;
