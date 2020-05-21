import React from 'react';
import Sliders from '../slider/Slider'
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
                        <Sliders />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;


