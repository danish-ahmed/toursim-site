import React from "react";
import { Switch , Route } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import AdminPage from "./AdminPage";
import AddActivity from "./AddActivity";
import AdminRoute from '../components/routes/AdminRoute';

const AdminDashboard = (props) => {
  console.log(props)
  return (
    <section class="innerpage-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="dashboard-heading">
              <h2>
                Travel <span>Profile</span>
              </h2>
            </div>

            <div class="dashboard-wrapper">
              <div class="row">
                <AdminNav {...props} />
              
                  <Route
                    component={AdminPage}
                    exact
                    path="/dashboard"
                  />
                  <Route
                    component={AddActivity}
                    path={"/admindashboard/add-activity"}
                    exact={true}
                  />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

// <GuestRoute location={location} path="/login" component={LoginPage} exact={true} />
//                                             <Route location={location} path="/forgot-password" component={ForgotPasswordPage} exact={true}/>
//                                             <Route path="/signup" component={SignupPage} exact={true}/>
//                                             <UserRoute location={location} path='/dashboard' component={Dashboard} exact={true}/>
//                                             <AdminRoute location={location} path='/admindashboard' component={AdminDashboard} exact={true} />
