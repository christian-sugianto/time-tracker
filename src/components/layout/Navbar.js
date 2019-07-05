import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../../assets/clock.png'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-color">
        <a class="navbar-brand" id="navbar-brand-override" href="#">
            FocusTimer
            <img class="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav mr-auto">
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-override" href='#'>About</a>
            </li>
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-override" href='#'>Settings</a>
            </li>
        </ul>

        <ul class="navbar-nav ml-auto">
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-override" href='#'>Login</a>
            </li>
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-override" href='#'>Register</a>
            </li>
        </ul> 
        
    </nav>
  )
}

export default Navbar;