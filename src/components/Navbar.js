import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../assets/clock.png'
import LoginPicture from '../assets/login.png'
import SignupPicture from '../assets/signup.png'

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
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#signupModal">
                            <img src={SignupPicture} id="small-img-override"></img>
                            Signup
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">
                            <img src={LoginPicture} id="small-img-override"></img>
                            Login
                        </a>
                    </li>
                </ul>
            </div>

            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> Login </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> Signup </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;