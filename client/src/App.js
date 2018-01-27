import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchProperties} from './actions/actions'
import NavBar from './components/NavBar';

import Routes from './components/Routes'
import {withRouter, Route} from 'react-router-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  componentDidMount(){
    this.props.fetchProperties()
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <NavBar />
          <Route component={Routes} />
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    properties: state.properties,
    isLoading:state.isLoading
  }
}

App.propTypes = {
  properties: PropTypes.array.isRequired,
  fetchProperties: PropTypes.func.isRequired
}
export default withRouter(connect(mapStateToProps, {fetchProperties})(App))

