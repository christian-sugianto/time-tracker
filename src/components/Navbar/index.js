import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ClockPicture from '../../assets/pictures/clock.png'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-override">
        <Link to="/" className="navbar-brand" id="navbar-brand-override">
          TimeTracker
                    <img className="img-fluid" id="img-override" src={ClockPicture} alt="clock"></img>
        </Link>
      </nav>
    )
  }
}

export default Navbar;