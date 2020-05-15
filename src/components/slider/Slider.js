import React, { Component } from "react";
import Slider from "react-slick";
import Icon from "../Icons";
import IMG1 from "../../assets/img/Tian.jpg";
import IMG2 from "../../assets/img/katro.jpg";
import IMG3 from "../../assets/img/Melodist.png";
import IMG4 from "../../assets/img/cutting.jpg";
import './_slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slider__buttons">
            <button className="btn btn__arrow btn_next js-btn_next" onClick={onClick}> 
                <Icon className="btn__icon" name="arrow" />
            </button>
        </div>
        
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slider__buttons">
            <button className="btn btn__arrow btn__prev js-btn_prev" onClick={onClick}>
                <Icon className="btn__icon" name="arrow" />
            </button>
        </div>
        
    );
}

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const arrow = {arrows: false}

        return (
            <div className='slider__wrapper'>
            <div className="slider__descriptions js_slider">
                <Slider 
                asNavFor={this.state.nav2} 
                ref={slider => (this.slider1 = slider)}
                {...arrow}
                >
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
                </Slider>
            </div>
            <div className="slider__imgs">
                <Slider 
                    asNavFor={this.state.nav1} 
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    {...settings}
                
                >
                    <div className="slider__img">
                        <img src={IMG1} alt="travel" />
                    </div>
                    <div className="slider__img">
                        <img src={IMG2} alt="travel" />
                    </div>
                    <div className="slider__img">
                        <img src={IMG3} alt="travel" />
                    </div>
                    <div className="slider__img">
                        <img src={IMG4} alt="travel" />
                    </div>
                    <div className="slider__img">
                        <img src={IMG2} alt="travel" />
                    </div>
                    <div className="slider__img">
                        <img src={IMG4} alt="travel" />
                    </div>
                </Slider>
            </div>
        </div>    
        );
    }
}



