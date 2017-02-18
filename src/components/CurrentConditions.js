import React from 'react';
//import { Accordion, Panel, Glyphicon } from 'react-bootstrap';


var CurrentConditions = React.createClass({
	render: function () {
		return (
			<div>
				<h2>Current Conditions</h2>
				<hr />
				<div>
					<p>{ this.props.currently.temp }&deg;</p>
					<p>{ this.props.currently.description }</p>
					<p>precip: {this.props.currently.precip } &#37;</p>
				</div>
			</div>
		)
	}
});
export default CurrentConditions;