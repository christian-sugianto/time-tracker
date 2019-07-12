import React from 'react';
import { Link } from 'react-router-dom';
import ClockPicture from '../../assets/clock.png'
import LoginPicture from '../../assets/login.png'
import SignupPicture from '../../assets/signup.png'

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
                            <img src={SignupPicture} id="small-img-override"></img>
                            SignUp
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

            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-login" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" id="modal-header-override">
                            <h5 class="modal-title" id="modal-label-login"> Login </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="inputEmail" id="inputLabel">Email address</label>
                                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword" id="inputLabel">Password</label>
                                    <input type="password" class="form-control" id="inputPassword"></input>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="rememberMe"></input>
                                    <label class="form-check-label" for="rememberMe">Remember Me</label>
                                </div>
                                <button type="submit" class="btn btn-primary" id="btn-override">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" id="modal-header-override">
                            <h5 class="modal-title" id="modal-label-signup"> Create an Account </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="inputEmail" id="inputLabel">Email address</label>
                                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword" id="inputLabel">Password</label>
                                    <input type="password" class="form-control" id="inputPassword"></input>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword" id="inputLabel">Confirm Password</label>
                                    <input type="password" class="form-control" id="inputPassword"></input>
                                </div>
                                <button type="submit" class="btn btn-primary" id="btn-override">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;