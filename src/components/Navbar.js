import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../../assets/clock.png'

function Navbar() {

    
    return (
        <div class="container-fluid" id = "container-override">
            <nav class="navbar navbar-expand-lg navbar-dark navbar-color">
                <a class="navbar-brand" id="navbar-brand-override" href="#">
                    FocusTimer
                    <img class="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mr-auto">
                        <a class= "nav-item nav-link" id="nav-link-override" href = "#">About</a>
                        <a class= "nav-item nav-link" id="nav-link-override" href = "#">Settings</a>
                    </div>

                    <div class="navbar-nav ml-auto" id="right-navbar-nav-override">
                        <a class= "nav-item nav-link" id="nav-link-override" href = "#"> Signup</a>
                        <a class= "nav-item nav-link" id="nav-link-override" href = "#">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;