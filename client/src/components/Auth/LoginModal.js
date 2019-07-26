import React, { Component } from "react";
import $ from 'jquery';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from "jwt-decode";

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    loginError: ""
}

class LoginModal extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    // set state value based on target value
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    // send user data
    onSubmit = e => {

        // prevents web from refreshing the entire page
        e.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        let emailError = "";
        let passwordError = "";
        let loginError = "";

        // email errors
        const pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!this.state.email) {
            emailError = "please enter your email address";
        }
        else if (!pattern.test(this.state.email)) {
            emailError = "please enter a valid email address";
        }

        // password errors
        if (!this.state.password) {
            passwordError = "please enter your password";
        }
        else if (this.state.password.length < 8) {
            passwordError = "password must be at least 8 characters";
        }

        // no error in email and password
        if (emailError === "" && passwordError === "") {

            // login user
            this.postUser(userData).done(function(data) {
                if(data.success !== true) {
                    loginError = "invalid email or password";
                }

                else {
                    // save token locally
                    localStorage.setItem('jwtToken', data.token);
                    
                    // Set token to Auth header
                    setAuthToken(data.token);
                    
                    // Decode token to get user data
                    const decoded = jwt_decode(data.token);
                            
                    // close modal after login
                    $(function () {
                        $('#loginModal').modal('toggle');
                    });
                }
            });
        }

        // login is successful
        if (emailError === "" && passwordError === "" && loginError === "") {
            this.setToInitialState();
            this.props.callbackFromParent(true);
        }

        // set error message
        this.setState({
            emailError,
            passwordError,
            loginError
        })        
    };

    // post user
    postUser = (userData) => {

        // convert to JSON string
        var body = JSON.stringify(userData);
        
        // post to server
        return $.ajax({
            type: "POST",
            url: 'http://localhost:3001/api/user/login',
            data: body,
            async: false,
            contentType: 'application/json',
            success: function(data) {
                console.log(data);
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    }

    render() {
        return (
            <div className="login">
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="modal-label-login" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" id ="modal-content-override">
                            <div className="modal-header" id="modal-header-override">
                                <h5 className="modal-title" id="modal-label-login"> Login </h5>
                                <button onClick={this.setToInitialState} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit = {this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="input-label">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="form-control" 
                                            onChange={this.onChange}
                                            value={this.state.email}/>    
                                        <div className="error-message"> {this.state.emailError} </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            onChange={this.onChange}
                                            value={this.state.password}/>
                                            <div className="error-message"> {this.state.passwordError} </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" id="loginButton">Sign in</button>
                                    <div className="error-message login-error"> {this.state.loginError} </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginModal;