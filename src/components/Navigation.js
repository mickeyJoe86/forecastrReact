import React, { Component } from 'react';
import { Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';

class Navigation extends Component {
	constructor() {
		super();
		this.state = { value: 'fet' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		//Handle Post below
		alert("test: " +  this.state.value);
	}
	handleChange(event){
		this.setState({ value: event.target.value })
	}
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Forecastr </a>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Form pullRight>
					<form onSubmit={this.handleSubmit}>
						<FormGroup>
							<FormControl type="text" placeholder="Search" onChange={this.handleChange} value={ this.state.value }/>
						</FormGroup>					
						<Button type="submit">Submit</Button>
					</form>
				</Navbar.Form>
			</Navbar>
		);
	}
}

export default Navigation;