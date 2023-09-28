import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorExtraInfo.scss'
import { getDetailInfoDoctor } from '../../../services/userService'
import { LANGUAGES } from '../../../utils';
import moment from 'moment'
import localization from 'moment/locale/vi'
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfo: false
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {

    }

    showHideDetailInfo = (status) => {
        this.setState({
            isShowDetailInfo: status
        })
    }

    render() {
        let { isShowDetailInfo } = this.state
        return (
            <div className='doctor-extra-info-container'>
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM</div>
                    <div className='name-clinic'>Phòng khám Chuyên khoa Yên Hòa</div>
                    <div className='detail-address'>số 11 i4, ngõ 37 Trần Kim Xuyến, khu Đô Thị Mới Yên Hoà, Yên Hoà, Cầu Giấy, Hà Nội</div>
                </div>
                <div className='content-down'>
                    {!isShowDetailInfo ?
                        <div className='short-info'>
                            GIÁ KHÁM: 300.000đ
                            <span onClick={() => this.showHideDetailInfo(true)}>
                                Xem chi tiết
                            </span>
                        </div>
                        :
                        <>
                            <div className='title-price'>Giá khám</div>
                            <div className='detail-info'>
                                <div className='price'>
                                    <span className='left'>Giá khám</span>
                                    <span className='right'>250.000đ</span>
                                </div>
                                <div className='note'>Đc ưu tiên khám</div>
                            </div>
                            <div className='payment'>
                                Thanh toán bằng tiền mặt
                            </div>
                            <div className='hide-price'>
                                <span onClick={() => this.showHideDetailInfo(false)}>
                                    Ẩn bảng giá
                                </span>
                            </div>
                        </>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
