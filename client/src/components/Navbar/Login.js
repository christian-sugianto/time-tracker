import React, { Component } from "react";

class Login extends Component {

    render() {
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="input-label">Email address</label>
                                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword" className="input-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword"></input>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe"></input>
                                        <label className="form-check-label remember-me">Remember Me</label>
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

export default Login