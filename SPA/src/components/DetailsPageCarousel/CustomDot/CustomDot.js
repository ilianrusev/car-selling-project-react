import React from "react";

import style from './CustomDot.module.css'
import DUMMY_IMAGES from "../DummyImages2";


const CustomDot = ({ onClick, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = DUMMY_IMAGES;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            className={`${style.button} ${active ? style.active : style.inactive}`}
            onClick={() => onClick()}
        >
            {React.Children.toArray(carouselItems)[index]}
        </button>
    );
};

export default CustomDot