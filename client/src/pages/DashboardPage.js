import React, { Component } from 'react';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';

export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Panel style={{marginTop:'15px', background:'#448AFF', color: '#fff'}}>
                <span><i className="material-icons">info</i> Confirm your Email </span>
                </Panel>
            </Container>
        );
    }
}