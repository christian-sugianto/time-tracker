import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../../assets/pictures/clock.png'
import LoginPicture from '../../assets/pictures/login.png'
import SignupPicture from '../../assets/pictures/signup.png'

/* components */
import Login from './Login'
import Signup from './Signup'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark navbar-override">
            <a class="navbar-brand" id="navbar-brand-override" href="#">
                FocusTimer
                <img class="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Settings</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#signupModal">
                            <img src={SignupPicture} id="small-img-override" alt="Signup Icon"></img>
                            SignUp
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">
                            <img src={LoginPicture} id="small-img-override" alt="Login Icon"></img>
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

export default Navbar;