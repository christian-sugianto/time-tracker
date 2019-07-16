import React, { Component } from "react";

class Signup extends Component {
    state = {
        name : '',
        email: '',
        password: '',
        password_confirm: ''
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value
        })
    }

    handlelSubmit = (e) => {
        console.log(this.state);
    }
    render() {
        return (
            <div className="signup">
                <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" id="modal-content-override">
                            <div className="modal-header" id="modal-header-override">
                                <h5 className="modal-title" id="modal-label-signup"> Create an Account </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="input-label">Name</label>
                                        <input type="string" className="form-control" id="name" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="input-label">Email Address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <input type="password" className="form-control" id="password" onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password_confirm" className="input-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="password_confirm" onChange={this.handleChange}></input>
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

export default Signup;