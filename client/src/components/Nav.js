import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
      <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
            <div className="container">
                <div className="navbar-header">
                    <NavLink to="/" className="navbar-brand"><span><i className="fa fa-plane"></i>STAR</span>TRAVELS</NavLink>
                </div>
                
                <div className="collapse navbar-collapse" id="myNavbar1">
                    <ul className="nav navbar-nav navbar-right ">
                        
                        <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown">Pages<span><i className="fa fa-angle-down"></i></span></a>
                            <ul className="dropdown-menu mega-dropdown-menu row">
                                <li>
                                    <ul className="list-unstyled">
                                        <li className="dropdown-header">Standard <span>Pages</span></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="blog-listing-left-sidebar.html">Blog Listing Left Sidebar</a></li>
                                        <li><a href="blog-listing-right-sidebar.html">Blog Listing Right Sidebar</a></li>
                                        <li><a href="blog-detail-left-sidebar.html">Blog Detail Left Sidebar</a></li>
                                        <li><a href="blog-detail-right-sidebar.html">Blog Detail Right Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>			
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
};

export default Nav;