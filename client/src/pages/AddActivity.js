import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import AddActivityForm from '../components/AddActivityFrom'
import Steper  from '../components/Steper'

class LoginForm extends Component {
   
    
    

    
    render() {
      //   const message = (<Panel style={{background:'#F8BBD0'}}>
      //       <InlineError text={this.state.errors.global} /></Panel>)
        return (
            <Container fluid={true} >
               <Steper />
            </Container>
        );
    }
}
// LoginForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }

export default LoginForm;