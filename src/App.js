import React from 'react';
import Navigation from './components/Navigation';
import CurrentConditions from './components/CurrentConditions';
import TempChart from './components/Chart';
import SevenDay from './components/SevenDay';

import './App.css';
import MockData from './MockData';

var App = React.createClass({
	getInitialState: function () {
		return {
			currently: {},
			panels: [],
			tempData: []
		};
	},
	componentWillMount: function () {
		var response = MockData();
		this.setState({
			currently: response.currentConditions,
			panels: response.panels,
			tempData: response.tempData
		});
	},
	render: function () {
		return (
			<div>
				<Navigation />
				<div className="container">
					<CurrentConditions currently={ this.state.currently } />
					<TempChart temps={ this.state.tempData } />
					<SevenDay panels={ this.state.panels } />
				</div>
			</div>
		);
	}
});
export default App;