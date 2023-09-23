import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorSchedule.scss'
import { getDetailInfoDoctor } from '../../../services/userService'
import { LANGUAGES } from '../../../utils';
import moment from 'moment'
import localization from 'moment/locale/vi'
import { getScheduleDoctorByDate } from '../../../services/userService';

class DoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: []
        }
    }

    async componentDidMount() {
        let { language } = this.props
        this.setArrDays(language)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setArrDays(this.props.language)
        }
    }

    setArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let obj = {}
            if (language === LANGUAGES.VI) {
                obj.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM')
            }
            else {
                obj.label = moment(new Date()).add(i, 'days').locale('en').format("ddd - DD/MM")
            }
            obj.value = moment(new Date()).add(i, 'days').startOf('day').valueOf()
            allDays.push(obj)
        }


        this.setState({
            allDays: allDays
        })
    }

    handleOnChangeSelect = async (e) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent
            let date = e.target.value
            let res = await getScheduleDoctorByDate(doctorId, date)
            console.log(res)
        }
    }

    render() {
        let { allDays } = this.state
        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(e) => this.handleOnChangeSelect(e)}>
                        {allDays && allDays.length > 0 && allDays.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='all-available-time'>

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
