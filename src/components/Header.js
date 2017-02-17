import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>               
            </Navbar>
        );
    }
}

export default Header;