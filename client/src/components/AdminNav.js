import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminNav = ({match}) => {
    return (
        <div class="col-xs-12 col-sm-2 col-md-2 dashboard-nav">
            <ul class="nav nav-tabs nav-stacked text-center">
                <li class="active">
                    <NavLink to="/admindashboard/dashboard">
                        <span><i class="fa fa-cogs"></i></span>Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to={match.url+"admindashboard/add-activity"}>
                        <span><i class="fa fa-user"></i></span>Add Activity 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='add-holiday'>
                        <span><i class="fa fa-briefcase"></i></span>Add Holiday
                    </NavLink>
                </li>        
                <li>
                    <a href="wishlist.html"><span><i class="fa fa-heart"></i></span>Add Hotel</a>
                </li>
                <li>
                    <a href="cards.html"><span><i class="fa fa-credit-card"></i></span>My Visa</a>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;