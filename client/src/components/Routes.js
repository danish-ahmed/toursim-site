import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/DashboardPage';
import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute';
import PropTypes from 'prop-types'
import AdminRoute from './routes/AdminRoute';
import AdminDashboard from '../pages/AdminDashboard'

const Routes = (location) => {
    return (
        <main>
            <Switch>
                <Route location={location} path="/" component={HomePage} exact={true} />
                <GuestRoute location={location} path="/login" component={LoginPage}  />
                <Route location={location} path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/signup" component={SignupPage} />
                <UserRoute location={location} path='/dashboard' component={Dashboard} />
                <AdminRoute location={location} path='/admindashboard/' component={AdminDashboard}  />
            </Switch>
        </main>
    );
};

Routes.propTypes = {
    location:PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default Routes;