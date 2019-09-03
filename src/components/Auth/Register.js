import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
            passwordCfm: this.state.passwordCfm
        };

        this.props.registerUser(newUser, this.props.history); 
    }

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="signup">

                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="modal-content-override">
                        <div className="modal-header" id="modal-header-override">
                            <h5 className="modal-title" id="modal-label-signup"> Create an Account </h5>
                        </div>
                        <div className="modal-body">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="input-label">Name</label>
                                    <input type="text" id="name" error={errors.name} 
                                        value={this.state.name} onChange={this.onChange}
                                        className={classnames("form-control", {invalid: errors.name})}></input>
                                    <div className="error-message"> {errors.name} </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="input-label">Email Address</label>
                                    <input type="email" id="email" aria-describedby="emailHelp"
                                        value={this.state.email} onChange={this.onChange} error={errors.email}
                                        className={classnames("form-control", {invalid: errors.email})}></input>
                                    <div className="error-message"> {errors.email} </div>
                                </div>
                                    

                                <div className="form-group">
                                    <label htmlFor="password" className="input-label">Password</label>
                                    <input type="password" id="password" value={this.state.password} 
                                        onChange={this.onChange} error={errors.password}
                                        className={classnames("form-control", {invalid: errors.password})}></input>
                                    <div className="error-message"> {errors.password} </div>
                                </div>
                                    

                                <div className="form-group">
                                    <label htmlFor="passwordCfm" className="input-label">Confirm Password</label>
                                    <input type="password" id="passwordCfm" value={this.state.passwordCfm} 
                                    onChange={this.onChange} error={errors.passwordCfm}
                                        className={classnames("form-control", {invalid: errors.passwordCfm})}></input>
                                    <div className="error-message"> {errors.passwordCfm} </div>
                                </div>

                                <button type="submit" className="btn btn-primary" id="signupButton">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));