import React from 'react';
import { Accordion, Panel, Glyphicon } from 'react-bootstrap';
import MockData from '../MockData';

var SevenDay = React.createClass({
    getInitialState: function () {
        return { panels: [] }
    },
    componentDidMount: function () {
        var response = MockData();
        this.setState({            
            panels: response.panels
        });
    },
    render: function () {
        return (
            <div>
                <h2>Weekly Forecast</h2>
                <hr />
                <Accordion>
                    {this.state.panels.map(function (panel, index) {
                        return (
                            <Panel key={panel.id}
                                header={
                                    <div>
                                        <Glyphicon glyph="glyphicon glyphicon-plus-sign" />
                                        <span> {panel.title}</span>
                                    </div>
                                }
                                eventKey={panel.id}>
                                {panel.body}
                            </Panel>
                        )
                    })}
                </Accordion>
            </div>
        );
    }
});
export default SevenDay;