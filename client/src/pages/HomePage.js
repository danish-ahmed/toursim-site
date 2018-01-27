import React, { Component } from 'react';
import Slider from '../components/Slider'
import SearchTabs from '../components/SearchTabs';

export default class  extends Component {
    render() {
        return (
            <section class="flexslider-container" id="flexslider-container-1">
                <Slider />
                <SearchTabs />
            </section>
        );
    }
}