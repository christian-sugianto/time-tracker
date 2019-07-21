import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
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
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-login" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" id ="modal-content-override">
                            <div className="modal-header" id="modal-header-override">
                                <h5 className="modal-title" id="modal-label-login"> Login </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                            value={this.state.email}
                                            error={errors.password}/>    
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;