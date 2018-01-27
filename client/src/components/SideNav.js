import React from 'react';

const SideNav = () => {
    return (
        <div className="sidenav-content">
        <div id="mySidenav" className="sidenav" >
            <h2 id="web-name"><span><i className="fa fa-plane"></i></span>Star Travel</h2>

            <div id="main-menu">
                <div className="closebtn">
                    <button className="btn btn-default" id="closebtn">&times;</button>
                </div>
                
                <div className="list-group panel">
                
                    <a href="#home-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon"></i></span>Home<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="home-links">
                        <a href="#" className="list-group-item active">Main Homepage</a>
                        <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                        <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                        <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                        <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                        <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                        <a href="landing-page.html" className="list-group-item">Landing Page</a>
                    </div>
                    
                    <a href="#flights-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-plane link-icon"></i></span>Flights<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="flights-links">
                        <a href="flight-homepage.html" className="list-group-item">Flight Homepage</a>
                        <a href="flight-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                        <a href="flight-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                        <a href="flight-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                        <a href="flight-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                        <a href="flight-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                        <a href="flight-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                    </div>
                    
                    <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-building link-icon"></i></span>Hotels<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="hotels-links">
                        <a href="hotel-homepage.html" className="list-group-item">Hotel Homepage</a>
                        <a href="hotel-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                        <a href="hotel-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                        <a href="hotel-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                        <a href="hotel-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                        <a href="hotel-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                        <a href="hotel-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                    </div>
                    
                    <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon"></i></span>Tours<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="tours-links">
                        <a href="tour-homepage.html" className="list-group-item">Tour Homepage</a>
                        <a href="tour-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                        <a href="tour-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                        <a href="tour-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                        <a href="tour-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                        <a href="tour-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                        <a href="tour-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                    </div>
                    
                    <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon"></i></span>Cruise<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="cruise-links">
                        <a href="cruise-homepage.html" className="list-group-item">Cruise Homepage</a>
                        <a href="cruise-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                        <a href="cruise-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                        <a href="cruise-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                        <a href="cruise-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                        <a href="cruise-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                        <a href="cruise-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                    </div>
                    
                    <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon"></i></span>Cars<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="cars-links">
                        <a href="car-homepage.html" className="list-group-item">Car Homepage</a>
                        <a href="car-listing-left-sidebar.html" className="list-group-item">List View Left Sidebar</a>
                        <a href="car-listing-right-sidebar.html" className="list-group-item">List View Right Sidebar</a>
                        <a href="car-grid-left-sidebar.html" className="list-group-item">Grid View Left Sidebar</a>
                        <a href="car-grid-right-sidebar.html" className="list-group-item">Grid View Right Sidebar</a>
                        <a href="car-detail-left-sidebar.html" className="list-group-item">Detail Left Sidebar</a>
                        <a href="car-detail-right-sidebar.html" className="list-group-item">Detail Right Sidebar</a>
                    </div>
                    
                    <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon"></i></span>Pages<span><i className="fa fa-chevron-down arrow"></i></span></a>
                    <div className="collapse sub-menu" id="pages-links">
                        <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                        <a href="about-us.html"  className="list-group-item">About Us</a>
                        <a href="contact-us.html"  className="list-group-item">Contact Us</a>
                        <a href="blog-listing-left-sidebar.html"  className="list-group-item">Blog Listing Left Sidebar</a>
                        <a href="blog-listing-right-sidebar.html"  className="list-group-item">Blog Listing Right Sidebar</a>
                        <a href="blog-detail-left-sidebar.html"  className="list-group-item">Blog Detail Left Sidebar</a>
                        <a href="blog-detail-right-sidebar.html"  className="list-group-item">Blog Detail Right Sidebar</a>
                        <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                        <a href="dashboard.html"  className="list-group-item">Dashboard</a>
                        <a href="user-profile.html"  className="list-group-item">User Profile</a>
                        <a href="booking.html"  className="list-group-item">Booking</a>
                        <a href="wishlist.html"  className="list-group-item">Wishlist</a>
                        <a href="cards.html"  className="list-group-item">Cards</a>
                        <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                        <a href="login.html"  className="list-group-item">Login</a>
                        <a href="registration.html"  className="list-group-item">Registration</a>
                        <a href="forgot-password.html"  className="list-group-item">Forgot Password</a>
                        <a href="error-page.html"  className="list-group-item">404 Page</a>
                        <a href="coming-soon.html"  className="list-group-item">Coming Soon</a>
                        <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                        <a href="before-you-fly.html" className="list-group-item">Before Fly</a>
                        <a href="travel-insurance.html" className="list-group-item">Travel Insurance</a>
                        <a href="holidays.html" className="list-group-item">Holidays</a>
                        <a href="thank-you.html" className="list-group-item">Thank You</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    );
};

export default SideNav;