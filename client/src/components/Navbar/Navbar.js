import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import ClockPicture from '../../assets/pictures/clock.png'
import LoginPicture from '../../assets/pictures/login.png'
import SignupPicture from '../../assets/pictures/signup.png'

/* components */
import Login from './Login'
import Signup from './Signup'

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-override">
                <a className="navbar-brand" id="navbar-brand-override" href="#">
                    FocusTimer
                    <img className="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Stats</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Leaderboards</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#signupModal">
                                <img src={SignupPicture} className="small-img-override" alt="Signup Icon"></img>
                                SignUp
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">
                                <img src={LoginPicture} className="small-img-override" alt="Login Icon"></img>
                                Login
                            </a>
                        </li>
                    </ul>
                </div>

                <Login />
                <Signup />
            </nav>
        )
    }
}

export default Navbar;