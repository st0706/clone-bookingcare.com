import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";


class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <ul>
                            <li>
                                <a target='_blank' href='https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm'>
                                    <i className="truyenthong-bt truyenthong-suckhoedoisong"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm'>
                                    <i className="truyenthong-bt truyenthong-vtv1"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://ictnews.vn/kinh-doanh/doanh-nghiep/st'>
                                    <i className="truyenthong-bt truyenthong-ictnews"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html'>
                                    <i className="truyenthong-bt truyenthong-vnexpress"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html'>
                                    <i className="truyenthong-bt truyenthong-vtcnews"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm'>
                                    <i className="truyenthong-bt truyenthong-suckhoedoisong"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://infonet.vietnamnet.vn/da-co-hon-20000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html'>
                                    <i className="truyenthong-bt truyenthong-infonet"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href='https://www.youtube.com/watch?v=mstAc81lpMc'>
                                    <i className="truyenthong-bt truyenthong-vtcgo"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
