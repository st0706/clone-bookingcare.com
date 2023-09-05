import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

        this.listentoEmitter()
    }

    listentoEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleUserModal()
    }
    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value
        this.setState({
            ...copyState
        })
    }
    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing required parameter: ' + arrInput[i])
                break
            }
        }
        return isValid
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            this.props.createNewUser(this.state)
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input value={this.state.email} type='text' onChange={(e) => this.handleOnChangeInput(e, 'email')} />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input value={this.state.password} type='password' onChange={(e) => this.handleOnChangeInput(e, 'password')} />
                        </div>
                        <div className='input-container'>
                            <label>Firstname</label>
                            <input value={this.state.firstName} type='text' onChange={(e) => this.handleOnChangeInput(e, 'firstName')} />
                        </div>
                        <div className='input-container'>
                            <label>Lastname</label>
                            <input value={this.state.lastName} type='text' onChange={(e) => this.handleOnChangeInput(e, 'lastName')} />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input value={this.state.address} type='text' onChange={(e) => this.handleOnChangeInput(e, 'address')} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-4' color="primary" onClick={() => { this.handleAddNewUser() }}>
                        Add new
                    </Button>{' '}
                    <Button className='px-4' color="secondary" onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

