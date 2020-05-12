import React from 'react';
import IMG from '../../assets/img/promo.png';
import './_promo.scss';

function Promo() {
    return (
        <section className="promo section">
            <div className="container br-lg">
                <div className="promo__content">
                    <div className="promo__description">
                        <div className="section__heading">
                            <h1 className="section__title section__title_hero promo__title">
                                Product Design Course
                                <span className="section__subtitle">Product Factory</span>
                                <span className="section__back-title">UI / UX</span>
                            </h1>
                            <p className="section__paragraph section__paragraph_big">
                                Learn how design thinking, user research,
                                business vision and marketing, and finally designing
                                and creating real digital products for real users.
                            </p>
                        </div>
                        <button className="btn btn__main">Start Register</button>
                    </div>
                    <div className="promo__img">
                        <h1 className="section__title section__title_hero promo__title promo__title_mobile">
                            Product Design Course
                            <span className="section__subtitle">Product Factory</span>
                            <span className="section__back-title">UI / UX</span>
                        </h1>
                        <img src={IMG} alt='factory'></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
