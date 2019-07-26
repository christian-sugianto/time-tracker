import React, { Component } from "react";

const initialState = {
    email: "",
    password: "",
    errors: []
}

class Login extends Component {
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
    }

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <form noValidate onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}/>    
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="loginButton">Sign in</button>
                    <div className="error-message login-error"> {this.state.loginError} </div>
                </form>
            </div>
        );
    }
}

export default Login;