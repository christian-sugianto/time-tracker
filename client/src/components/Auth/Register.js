import React, { Component } from "react";

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordCfm: '',
    errors: {}
}

class Register extends Component {

    // initialise state
    constructor() {
        super();
        this.state = initialState;
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

        // create new user
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
    }

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="signup">
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="input-label">Name</label>
                        <input type="text" className="form-control" id="name" error={errors.name}
                            value={this.state.name} onChange={this.onChange}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                            value={this.state.email} onChange={this.onChange} error={errors.email}></input>
                    </div>
                        

                    <div className="form-group">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input type="password" className="form-control" id="password"
                            value={this.state.password} onChange={this.onChange} error={errors.password}></input>
                    </div>
                        

                    <div className="form-group">
                        <label htmlFor="passwordCfm" className="input-label">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordCfm"
                            value={this.state.passwordCfm} onChange={this.onChange} error={errors.passwordCfm}></input>
                    </div>
                        
                    <button type="submit" className="btn btn-primary" id="signupButton">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Register;