import React, { useState } from "react";
import Slider from "react-slick";
import Icon from "../Icons";
import { SLIDER_DESCRIPTIONS } from '../../constatns';
import IMG1 from "../../assets/img/Tian.jpg";
import IMG2 from "../../assets/img/katro.jpg";
import IMG3 from "../../assets/img/Melodist.png";
import IMG4 from "../../assets/img/cutting.jpg";
import './_slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ onClick }) => (
    <div className="slider__buttons">
        <button className="btn btn__arrow btn_next" onClick={onClick}>
            <Icon className="btn__icon" name="arrow" />
        </button>
    </div>
);


const SamplePrevArrow = ({ onClick }) => (
    <div className="slider__buttons">
        <button className="btn btn__arrow btn__prev" onClick={onClick}>
            <Icon className="btn__icon" name="arrow" />
        </button>
    </div>
);

function AsNavFor() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const settings1 = {
        arrows: false,
        slidesToShow: 1,
        afterChange: current => setActiveSlide(current)
    };

    return (
        <div className='slider__wrapper'>
            <div className="slider__descriptions">
                <Slider
                    asNavFor={nav2}
                    ref={slider1 => setNav1(slider1)}
                    {...settings1}
                >
                    {SLIDER_DESCRIPTIONS.map(item => (
                        <div key={item.title} className="slider__description">
                            <h4 className="slider__subtitle">
                                {item.title}
                            </h4>
                            <p className="slider__paragraph">
                                {item.paragraph}
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
                    ))}
                </Slider>
                <span className="slider__value">{activeSlide + 1} / 6</span>
            </div>
            <div className="slider__imgs">
                <Slider
                    asNavFor={nav1}
                    ref={slider2 => setNav2(slider2)}
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

export default AsNavFor