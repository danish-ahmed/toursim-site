import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../actions/auth'




const TopNav = ({isAuthenticated, logout}) => {
    return (
        <div id="top-bar" className="tb-text-white">
        <div className="container">
            <div className="row">          
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div id="info">
                        <ul className="list-unstyled list-inline">
                            <li><span><i className="fa fa-map-marker"></i></span>29 Land St, Lorem City, CA</li>
                            <li><span><i className="fa fa-phone"></i></span>+00 123 4567</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div id="links">
                        <ul className="list-unstyled list-inline">
                        { ! isAuthenticated?
                            <li>
                                <NavLink className="link" to="/login">
                                    <i className="fa fa-lock"></i> Login
                                </NavLink> 
                            </li>
                            
                        :
                            <li>
                                <Button size="small" onClick={() => logout()} color="primary">Logout</Button> 
                            </li>
                        }
                        
                        {!isAuthenticated ? 
                            <li>
                                <NavLink className="link" to="/signup">
                                    <i className="fa fa-plus"></i> Signup
                                </NavLink>
                            </li> 
                            : 
                            ''
                        }
                            
                            <li>
                                <ul className="list-inline">
                                    <li>
                                        <div className="form-group currency">
                                            <span><i className="fa fa-angle-down"></i></span>
                                            <select className="form-control">
                                                <option value="">$</option>
                                                <option value="">£</option>
                                            </select>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <NavLink className="link" to="/login">
                                        <i className="fa fa-shopping-basket"></i>Cart<span class="badge">5</span>
                                    </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>			
            </div>
        </div>
    </div>  
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.token,
})

TopNav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {logout})(TopNav);