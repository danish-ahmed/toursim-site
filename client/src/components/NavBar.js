import React from 'react';
// import {NavLink} from 'react-router-dom';
// import Button from 'muicss/lib/react/button';
// import Appbar from 'muicss/lib/react/appbar';
// import logo from '../logo.jpg';
import {connect} from 'react-redux'
import {logout} from '../actions/auth'
import PropTypes from 'prop-types'
import TopNav from './TopNav'
import Nav from './Nav'

const NavBar = ({isAuthenticated, logout}) => {
    return (
        <div>
            <TopNav />
            <Nav />
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.token,
})

NavBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {logout})(NavBar)
// <Appbar style={{background: '#3A3A3C'}}>
//             <div className="mui-container">
//                 <ul className="main-nav">
//                     <li>
//                         <NavLink to="/" className="logo">
//                             <img style={{width:'100px', height:'30px'}} src={logo} alt="Logo"/>
//                         </NavLink>
//                     </li>
//                     <li>
//                     {
//                         isAuthenticated ? 
//                             <Button size="small" onClick={() => logout()} color="primary">Logout</Button> 
//                         :
//                         <NavLink className="link" to="/login">
//                             <Button size="small" color="primary">Login/Signup </Button> 
//                         </NavLink>
//                     }

//                     </li>
//                     <li>
//                         <NavLink className="link" to="/login" >
//                             <Button size="small" color="accent">Add Property </Button>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>     
//         </Appbar>