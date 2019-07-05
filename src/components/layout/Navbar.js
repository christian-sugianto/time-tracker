import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
            FocusTimer
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav mr-auto">
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-overrides" href='#'>About</a>
            </li>
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-overrides" href='#'>Settings</a>
            </li>
        </ul>

        <ul class="navbar-nav ml-auto">
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-overrides" href='#'>Login</a>
            </li>
            <li class= "nav-item">
                <a class="nav-link" id="nav-link-overrides" href='#'>Register</a>
            </li>
        </ul> 
        
    </nav>
  )
}

export default Navbar;