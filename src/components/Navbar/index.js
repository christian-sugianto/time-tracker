import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ClockPicture from '../../assets/pictures/clock.png'

class Navbar extends Component {
    constructor() {
        super();
    }

    IsUserLoggedin() {
        if (localStorage.jwtToken) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-override">
                <Link to="/" className="navbar-brand" id="navbar-brand-override">
                    FocusTime
                    <img className="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
                </Link>
            </nav>
        )
    }
}

export default Navbar;