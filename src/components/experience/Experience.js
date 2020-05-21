import React from 'react';
import Tabs from "../tabs/Tabs";
import experienceImg from '../../assets/img/banner.png';
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
                    <img className="experience__img" src={experienceImg} alt="banner" />
                    <Tabs />
                </div>
            </div>
        </section>
    );
}

export default Experience;
