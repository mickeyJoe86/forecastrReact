import React from 'react';
import { Accordion, Panel, Glyphicon } from 'react-bootstrap';

var SevenDay = React.createClass({
	render: function () {
		return (
			<div>
				<h2>Weekly Forecast</h2>
				<hr />
				<Accordion>
					{this.props.panels.map(function (panel, index) {
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