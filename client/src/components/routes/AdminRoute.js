import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const UserRoute = ({isAdmin, component: Component, ...rest}) => {
    return (
        <Route render={props => isAdmin ? <Component {...props} /> : <Redirect to='/login' />} />
    );
};

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool.isRequired
}

const mapStateToProps = ( state ) => ( {isAdmin: !!state.user.token} );

export default connect(mapStateToProps)(UserRoute);