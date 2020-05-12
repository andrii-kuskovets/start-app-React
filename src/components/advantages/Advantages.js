import React from 'react';
import Icon from "../Icons";
import './_advantages.scss';

function Advantages() {
    return (
        <section className="advantages section" id="avdantages">
            <div className="container br-lg">
                <div className="advantages__content">
                <div className="section__heading">
                    <h2 className="section__title advantages__title">
                    Course fee
                    <span className="section__back-title section__back-title_small">Course fee</span>
                    </h2>
                </div>
                <div className="advantages__description">
                    <div className="advantages__list">
                    <h4 className="advantages__subtitle">
                        What will be our achievements by participating in this course?
                    </h4>
                    <ul className="list">
                        <li className="list__item list__item_d-flex">
                            <Icon className="list__icon" name="check" />
                        <span>Learn the requirements of a product designer from experienced professionals in the field.</span> 
                        </li>
                        <li className="list__item list__item_d-flex">
                            <Icon className="list__icon" name="check" />
                        <span>Experience in-team work and product designer interactions within the real product team.</span>
                        </li>
                        <li className="list__item list__item_d-flex">
                            <Icon className="list__icon" name="check" />
                        <span>Experience working on projects with information and feature lists and real user recognition.</span>
                        </li>
                        <li className="list__item list__item_d-flex">
                            <Icon className="list__icon" name="check" />
                        <span>Possibility to take Adobe exams upon completion of course and upon registration.</span>
                        </li>
                    </ul>
                    </div>
                    <div className="advantages__card br-xs br-black">
                    <div className="price">
                        <span className="price__old">4,000,000 Toman</span>
                        <span className="price__new">2,000,000 Toman</span>
                    </div>
                    <p className="advantages__paragraph">
                        Possibility to pay periodic installment fee.
                    </p>
                    <button className="btn btn__main btn__main_xs">Register</button>
                    </div>
                </div>
                <p className="advantages__subtext">
                    Possibility of refund prior to the third session if the course quality is not satisfied.
                </p>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
