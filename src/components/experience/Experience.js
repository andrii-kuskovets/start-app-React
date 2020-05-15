import React from 'react';
import Icon from "../Icons";
import IMG from '../../assets/img/banner.png';
import './_experience.scss';

function Experience() {
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
                <img className="experience__img" src={IMG} alt="banner" />
                <div className="experience__tabs tabs">
                    <ul className="tabs__list-desktop js_tab-list-desktop">
                    <li className="tabs__name tabs__name_active"><span>After attending the course</span></li>
                    <li className="tabs__name"><span>During the period</span></li>
                    <li className="tabs__name"><span>Before attending the course</span></li>
                    </ul>
                    <ul className="tabs__items">
                    <li className="tabs__item tabs__item_active">
                        <div className="tabs__name js_tab-title">
                            <span>After attending the course</span>
                            <Icon className="tabs__icon" name="arrow" />
                        </div>
                        <div className="tabs__description tabs__description_active js_tabs__description-mobile">
                        <img src={IMG} alt="banner" />
                        <p className="tabs__paragraph">
                            This course has been attempted by zero people who are eager to learn product design, 
                            especially user experience and user interface, so it is not a prerequisite, but due 
                            to the limited capacity of the priority course with early enrolled people, others can 
                            participate in future courses. .
                            Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well 
                            as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, 
                        </p>
                        </div>
                    </li>
                    <li className="tabs__item">
                        <div className="tabs__name js_tab-title">
                            <span>During the period</span>
                            <Icon className="tabs__icon" name="arrow" />
                        </div>
                        <div className="tabs__description js_tabs__description-mobile">
                        <img src={IMG} alt="banner" />
                        <p className="tabs__paragraph">
                            Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well 
                            as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, 
                        </p>
                        </div>
                    </li>
                    <li className="tabs__item">
                        <div className="tabs__name js_tab-title">
                            <span>Before attending the course</span>
                            <Icon className="tabs__icon" name="arrow" />
                        </div>
                        <div className="tabs__description js_tabs__description-mobile">
                        <img src={IMG} alt="banner" />
                        <p className="tabs__paragraph">
                            This course has been attempted by zero people who are eager to learn product design, 
                            especially user experience and user interface, so it is not a prerequisite, but due 
                            to the limited courses tools like Adobe Photoshop and Adobe Illustrator as well 
                            as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, 
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
