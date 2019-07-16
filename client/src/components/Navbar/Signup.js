import React, { Component } from "react";

class Signup extends Component {

    render() {
        return (
            <div className="signup">
                <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="modal-label-signup" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content" id="modal-content-override">
                            <div class="modal-header" id="modal-header-override">
                                <h5 class="modal-title" id="modal-label-signup"> Create an Account </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="inputEmail" className="input-label">Email address</label>
                                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword" className="input-label">Password</label>
                                        <input type="password" class="form-control" id="inputPassword"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword" className="input-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="inputPassword"></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary" id="btn-override">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup