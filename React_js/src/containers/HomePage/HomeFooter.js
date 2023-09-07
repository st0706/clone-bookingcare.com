import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";


class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Sơn Tùng</p>
                <div className='icon-footer'>
                    <a target='_blank' href='https://www.facebook.com/st.0706' className='icon-fb'><i class="fab fa-facebook"></i></a>
                    <a target='_blank' href='https://github.com/st0706' className='icon-github'><i class="fab fa-github"></i></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
