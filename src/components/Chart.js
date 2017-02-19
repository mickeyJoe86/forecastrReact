import React from 'react';
import { Chart } from 'react-google-charts';

var TempChart = React.createClass({
	render: function () {
		return (
			<div className="container">
				<Chart
					chartType="LineChart"
					columns={
						[
							{ "type": "number" },
							{ "type": "number" }
						]
					}
					rows={ this.props.temps }
					options={{
						hAxis: {
							title: 'Time (hours)'
						},
						vAxis: {
							title: 'Temperature (F)'
						},
						curveType: 'function',
						legend: { position: 'none' }
					}}
					graph_id="line"
					width="100%"
					height="400px"
				/>
			</div>
		)
	}
});
export default TempChart;