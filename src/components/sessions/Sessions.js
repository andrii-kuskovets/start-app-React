import React from 'react';
import {SESSIONS} from "../../constatns";
import Icon from "../Icons";
import './_sessions.scss';

function Sessions() {
    return (
        <section className="sessions section" id="sessions">
            <div className="container">
                <div className="section__heading">
                <h2 className="section__title sessions__title">
                    Sessions
                    <span className="section__back-title">Sessions</span>
                </h2>
                </div>
                <ul className="sessions__list list">
                    {SESSIONS.map(item => (
                        <li key={item.title} className="list__item">
                            <div className="list__heading">
                            <h4 className="list__title">{item.title} Session</h4>
                            <div className="list__info">
                                <div className="list__details">
                                    <Icon className="list__icon" name="clock" />
                                    <span>Duration: 6 hour</span>
                                </div>
                                <div className="list__details">
                                    <Icon className="list__icon" name="event" />
                                    <span>Date: November 5</span>
                                </div>
                                <div className="list__details list__details_cursor">
                                    <Icon className="list__icon" name="play" />
                                    <span>View video</span>
                                </div>
                            </div>
                            </div>
                            <div className="list__description">
                                <div className="list__img">
                                    {item.src.map(path => (
                                        <img src={path} alt="master" />
                                    ))}
                                </div>
                                <div className="list__info list__info_mobile">
                                    <div className="list__details">
                                        <Icon className="list__icon" name="clock" />
                                        <span>Duration: 6 hour</span>
                                    </div>
                                    <div className="list__details">
                                        <Icon className="list__icon" name="event" />
                                        <span>Date: November 5</span>
                                    </div>
                                    <div className="list__details list__details_cursor">
                                        <Icon className="list__icon" name="play" />
                                        <span>View video</span>
                                    </div>
                                </div>
                                <p className="list__paragraph">{item.paragraph}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Sessions;
