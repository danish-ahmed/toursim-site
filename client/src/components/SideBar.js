import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import AppBar from 'material-ui/AppBar';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    render() {
        return (
            <div>
                <RaisedButton
                label="Toggle Drawer"
                onClick={this.handleToggle}
                />
                <Drawer width={200} openSecondary={true} open={this.state.open} >
                <AppBar title="AppBar" />
                </Drawer>
            </div>  
        );
    }
}