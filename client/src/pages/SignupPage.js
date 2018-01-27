import React, { Component } from 'react';
import SignupForm from '../forms/SignupForm'
import {connect} from 'react-redux';
import {signup} from '../actions/auth';
import axios from 'axios';

class SignupPage extends Component {

    handleSubmit = (data) => (
        this.props.signup(data)
            .then(res => this.props.history.push('/dashboard'))
    )
    checkUniqueness = (email) => (
        axios.get(`/api/v1/users/check-email?email=${email}`)    
    )
    
    render() {
        return (
          <div className="container">
            <SignupForm checkUniqueness={this.checkUniqueness} onSubmit={this.handleSubmit}/>
          </div>
        );
    }
}

export default connect(null, {signup})(SignupPage)