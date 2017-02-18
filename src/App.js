import React from 'react';
import Navigation from './components/Navigation';
import CurrentConditions from './components/CurrentConditions';
import SevenDay from './components/SevenDay';


import './App.css';
import MockData from './MockData';

var App = React.createClass({
	getInitialState: function () {
		var response = MockData();
		return {
			currently: response.currentConditions,
			panels: response.panels
		};
	},
	// componentDidMount: function () {
	// 	var response = MockData();
	// 	this.setState({
	// 		currently: response.currentConditions
	// 	});
	// },
	render: function () {
		return (
			<div>
				<Navigation />
				<div className="container">
					<CurrentConditions currently={ this.state.currently } />
					<SevenDay panels={ this.state.panels } />
				</div>
			</div>
		);
	}
});
export default App;