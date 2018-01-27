import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm'
import {connect} from 'react-redux';
import {login,isAdmin} from '../actions/auth';
// import PropTypes from 'prop-types';

class LoginPage extends Component {

  handleSubmit = (data) => (
    this.props.login(data)
      .then((user) => {
        if(this.props.isAdmin){
          this.props.history.push('/admindashboard')  
        }else{
          this.props.history.push('/dashboard')
        }
      })
  )
    
  render() {
    return (
      <div className="container">
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
            
    );
  }
}



export default connect(null, {login,isAdmin})(LoginPage)