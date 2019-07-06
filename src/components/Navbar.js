import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../assets/clock.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark navbar-color">
            <a class="navbar-brand" href="#">
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
                        <a class="nav-link" href="#">Signup</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;