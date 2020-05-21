import React from 'react';
import MAIL from '../../assets/img/Union.png';
import './_mailing.scss';

function Mailing() {
    return (
        <section className="mailing section">
            <div className="container">
                <div className="mailing__content">
                <div className="mailing__description">
                    <h4 className="mailing__subtitle">
                    Request a list of headings
                    </h4>
                    <p className="mailing__paragraph">
                    Please enter your email address to receive course titles, the topics will be emailed to you.
                    </p>
                    <form className="form">
                        <input className="form__input" type="email" name="mail" placeholder="Email" />
                    </form>
                    <span className="mailing__status">Your email has been successfully registered, headlines will be sent to you soon.</span>
                </div>
                <div className="mailing__img">
                    <img src={MAIL} alt="mail" />
                </div>
                </div>
            </div>
        </section>
    );
}

export default Mailing;
