import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
    sliderBlock:{
        color: 'gray',
        font:'normal 190% Times new roman',
        backgroundColor: '#150036',
        width: '80%',
        margin: 'auto',
        display: 'flex',
        textAlign: 'center',
        "@media (max-width:900px)": {
            font:'normal 150% Times new roman'
        },
        "@media (max-width:450px)": {
            font:'normal 120% Times new roman'
        },
    }
}));

const DivCarousel = (props) =>{
    const styles = useStyle();
    const settings = {
        className: styles.sliderBlock,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h3>{props.slide1}</h3>
                </div>
                <div>
                    <h3>{props.slide2}</h3>
                </div>
                <div>
                    <h3>{props.slide3}</h3>
                </div>
            </Slider>
        </div>
    );


}

export default DivCarousel;


