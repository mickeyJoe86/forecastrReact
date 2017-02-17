import React, { Component } from 'react';
import CurrentConditions from './CurrentConditions';
import SevenDay from './SevenDay';


class Body extends Component {
    render() {
        return (
            <div className="container"> 
                <CurrentConditions/>           
                <SevenDay />
            </div>
        );
    }
}
export default Body;