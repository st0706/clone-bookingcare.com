import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import './ManageDoctor.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            selectedDoctor: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }

    handleSaveContentMarkdown = () => {
        console.log('check state', this.state)
    }

    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor }, () =>
            console.log(`Option selected:`, this.state.selectedDoctor)
        );
    };

    handleOnChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>
                    Tạo thông tin bác sĩ
                </div>
                <div className='more-info'>
                    <div className='content-left'>
                        <labeL>Chọn bác sĩ</labeL>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className='content-right form-group'>
                        <label>Thông tin giới thiệu:</label>
                        <textarea
                            onChange={(event) => this.handleOnChangeDescription(event)}
                            className='form-control' rows='4'
                            value={this.state.description}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange} />
                </div>
                <button onClick={() => this.handleSaveContentMarkdown()} className='save-content-doctor'>Lưu thông tin</button>
            </div>

        )

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
