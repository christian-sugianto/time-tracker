import React, { Component } from "react";
import $ from 'jquery';
import axios from 'axios';

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordCfm: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordCfmError: ''
}

class Register extends Component {

    // initialise state
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordCfm: "",
            nameError: '',
            emailError: '',
            passwordError: '',
            passwordCfmError: ''
        };
    }

    // set state value based on target value
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    // send new user data
    onSubmit = (e) => {

        // prevents web from refreshing the entire page
        e.preventDefault();

        // checks if user input is valid
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setToInitialState();
        }
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
    }

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    }

    // validate user input into the registration form
    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let passwordCfmError = "";

        // name errors
        if (!this.state.name) {
            nameError = "please enter your name";
        }

        // email errors
        const pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!this.state.email) {
            emailError = "please enter your email address";
        }
        else if (!pattern.test(this.state.email)) {
            emailError = "please enter a valid email address"
        }
        else if (this.validate_email_uniqueness(this.state.email)) {
            emailError = "provided email is already used"
        }

        // password errors
        if (!this.state.password) {
            passwordError = "please enter your password";
        }
        else if (this.state.password.length < 8) {
            passwordError = "password must be at least 8 characters"
        }

        // password confirmation errors
        if (!this.state.passwordCfm) {
            passwordCfmError = "please re-enter your password";
        }
        else if (this.state.password.length < 8) {
            passwordCfmError = "password must be at least 8 characters"
        }
        else if (this.state.passwordCfm !== this.state.password) {
            passwordCfmError = "provided password does not match"
        }

        // set error states
        this.setState({
            nameError, emailError, passwordError, passwordCfmError
        })

        // returns true if there is no error
        if (nameError === "" && emailError === "" && passwordError === "" && passwordCfmError === "") {
            return true;
        }
        else {
            return false;
        }
    }

    validate2 = () => {
        axios.post(`http://localhost:3001/user/register`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    // checks if new user's email is already in the server
    email_uniqueness_validator = (email) => {
        $.ajax({
            type: "GET",
            url: '/user/email/' + email,
            success: function (data) {
                if (data.length > 0) {
                    $('#emailNotUnique').css('display', 'block');
                } else {
                    $('#emailNotUnique').css('display', 'none');
                }
            },
            error: function(jxHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }

    create = () => {

    }

    render() {
        const { errors } = this.state;
        return (
            <div className="signup">
                <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" id="modal-content-override">
                            <div className="modal-header" id="modal-header-override">
                                <h5 className="modal-title" id="modal-label-signup"> Create an Account </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.setToInitialState}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form novalidate onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="input-label">Name</label>
                                        <input type="text" className="form-control" id="name"
                                            value={this.state.name} onChange={this.onChange}></input>
                                        <div className="error-message"> {this.state.nameError} </div>
                                    </div>
                                        

                                    <div className="form-group">
                                        <label htmlFor="email" className="input-label">Email Address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                            value={this.state.email} onChange={this.onChange}></input>
                                        <div className="error-message"> {this.state.emailError} </div>
                                    </div>
                                        

                                    <div className="form-group">
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <input type="password" className="form-control" id="password"
                                            value={this.state.password} onChange={this.onChange}></input>
                                        <div className="error-message"> {this.state.passwordError} </div>
                                    </div>
                                        

                                    <div className="form-group">
                                        <label htmlFor="passwordCfm" className="input-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="passwordCfm"
                                            value={this.state.passwordCfm} onChange={this.onChange}></input>
                                        <div className="error-message"> {this.state.passwordCfmError} </div>
                                    </div>
                                        


                                    <button type="submit" className="btn btn-primary" id="signupButton">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;