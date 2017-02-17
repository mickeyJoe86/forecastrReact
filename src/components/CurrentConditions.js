import React from 'react';
//import { Accordion, Panel, Glyphicon } from 'react-bootstrap';
import MockData from '../MockData';

var CurrentConditions = React.createClass({
    getInitialState: function () {
        return {
            currently: {}
        };
    },
    componentDidMount: function () {
        var response = MockData();
        this.setState({            
            currently: response.currentConditions
        });
    },
    render: function () {
        return (
            <div>
                <h2>Current Conditions</h2>
                <hr />
                <div>
                    <p>{ this.state.currently.temp }&deg;</p>
                    <p>{ this.state.currently.description }</p>
                    <p>precip: { this.state.currently.precip }&#37;</p>
                </div>
            </div>
        )
    }
});
export default CurrentConditions;