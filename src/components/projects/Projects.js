import React from 'react';
import Icon from "../Icons";
import IMG1 from "../../assets/img/Tian.jpg"
import './_projects.scss';

function Projects() {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section__heading">
                <h2 className="section__title projects__title">
                    Projects
                    <span className="section__back-title">Projects</span>
                </h2>
                </div>
                <div className="projects__slider">
                <div className="slider">
                    <div className="slider__wrapper">
                    <div className="slider__descriptions js_slider">
                        <div className="slider__description">
                        <h4 className="slider__subtitle">
                            Design To Do List app
                        </h4>
                        <p className="slider__paragraph">
                            The previous student design project was the To Do List application product factory, 
                            The counter examples are the result of the efforts of the students and their teamwork 
                            in the first course.
                        </p>
                        <ul className="list">
                            <li className="list__item list__item_d-flex">
                                <Icon className="list__icon" name="check" />
                                <span>Experience teamwork in a real product team and a collaborative effort for a common goal.</span>
                            </li>
                            <li className="list__item list__item_d-flex">
                                <Icon className="list__icon" name="check" />
                                <span>Survey real users and needs assessment and find the most suitable solution to their problems.</span>
                            </li>
                            <li className="list__item list__item_d-flex">
                                <Icon className="list__icon" name="check" />
                                <span>Design experience from notebooks to user interface design software.</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="slider__imgs">
                        <div className="slider__img">
                        <img src={IMG1} alt="travel" />
                        </div>
                        <div className="slider__buttons">
                        <button className="btn btn__arrow btn_next js-btn_next">
                            <Icon className="btn__icon" name="arrow" />
                        </button>
                        <button className="btn btn__arrow btn__prev js-btn_prev">
                            <Icon className="btn__icon" name="arrow" />
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* add slides */}
                </div>
                </div>
                <span className="slider__value">1 / 15</span>
            </div>
        </section>
    );
}

export default Projects;
