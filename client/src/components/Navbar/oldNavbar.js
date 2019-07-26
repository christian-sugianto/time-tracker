import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from 'jquery';

import ClockPicture from '../../assets/pictures/clock.png'
import LoginPicture from '../../assets/pictures/login.png'
import SignupPicture from '../../assets/pictures/signup.png'
import RegisterModal from '../Auth/RegisterModal'
import LoginModal from '../Auth/LoginModal'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            userIsJustRegistered: false,
            userIsLoggedIn: false 
        }
    }

    // checkLoggedIn = () => {
    //     if (this.getUserData(function(data) {
    //         console.log(data);
    //     }));
    // }
    
    // getUserData = () => {
    //     return $.ajax({
    //         type: "GET",
    //         url: "http://localhost:3001/api/user/data",
    //         contentType: 'application/json',
    //         async: false,
    //         error: function (jXHR, textStatus, errorThrown) {
    //             alert(errorThrown);
    //         }
    //     })
    // }

    checkLoggedIn = (dataFromLogin) => {
        if (dataFromLogin === true) {
            this.setState({
                userIsLoggedIn: true
            });
        }
    }

    checkRegistered = (dataFromRegister) => {
        if (dataFromRegister === true) {
            this.setState({
                userIsJustRegistered: true
            })
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-override">
                <a className="navbar-brand" id="navbar-brand-override" href="#">
                    FocusTime
                    <img className="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Stats</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Leaderboard</a>
                        </li>
                    </ul>

                    {this.state.userIsLoggedIn === false && 
                        (<ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#signupModal">
                                    <img src={SignupPicture} id="small-img-override"></img>
                                    Register
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">
                                    <img src={LoginPicture} id="small-img-override"></img>
                                    Login
                                </a>
                            </li>
                        </ul>)
                    }

                    {this.state.userIsLoggedIn === true &&
                        (<ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#signupModal">
                                <img src={SignupPicture} id="small-img-override"></img>
                            </a>
                        </li>
                    </ul>)
                    }

                    <RegisterModal callbackFromParent={this.checkLoggedIn}/>
                    <LoginModal callbackFromParent={this.checkLoggedIn}/>
                </div>
            </nav>
        )
    }
}

export default Navbar;