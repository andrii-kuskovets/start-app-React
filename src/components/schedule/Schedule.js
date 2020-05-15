import React from 'react';
import Icon from "../Icons";
import './_schedule.scss';

function Schedule() {
    return (
        <section className="schedule section">
            <div className="container">
                <div className="section__heading">
                <h2 className="section__title schedule__title">
                    Schedule
                    <span className="section__back-title">Schedule</span>
                </h2>
                </div>
                <div className="schedule__status">
                <span className="schedule__subtitle">Start of course</span>
                    <Icon className="schedule__icon" name="line" />
                <span className="schedule__subtitle">End of course</span>
                </div>
                <div className="schedule__dates">
                <div className="schedule__date br-xs"><span>2020 / 05 / 05</span></div>
                <div className="schedule__date br-xs"><span>2020 / 07 / 07</span></div>
                </div>
                <div className="schedule__register">
                <span className="schedule__value">0</span>
                <span className="schedule__days-left">Days left to sign up</span>
                <button className="btn btn__main btn__main_md schedule__btn">Register</button>
                </div>
            </div>
        </section>
    );
}

export default Schedule;
