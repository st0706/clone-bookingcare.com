import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Speciality.scss'
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Speciality extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='section-speciality'>
                <div className='speciality-content'>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
