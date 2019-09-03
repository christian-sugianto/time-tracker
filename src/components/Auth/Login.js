import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames"

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

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

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    // revert to initialState
    setToInitialState = () => {
        this.setState(initialState);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                 <div className="modal-dialog" role="document">
                    <div className="modal-content" id ="modal-content-override">
                        <div className="modal-header" id="modal-header-override">
                            <h5 className="modal-title" id="modal-label-login"> Login </h5>
                        </div>
                        <div className="modal-body">
                            <form noValidate onSubmit = {this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="input-label">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className={classnames("form-control", {
                                            invalid: errors.email || errors.emailnotfound
                                        })}
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}/>    
                                    <div className="error-message"> 
                                        {errors.email} 
                                        {errors.emailnotfound} 
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password" className="input-label">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className={classnames("form-control", {
                                            invalid: errors.password || errors.passwordincorrect
                                        })}
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}/>
                                        <div className="error-message"> 
                                            {errors.password}
                                            {errors.passwordincorrect} 
                                        </div>
                                </div>
                                <button type="submit" className="btn btn-primary" id="loginButton">Sign in</button>
                                <div className="error-message login-error"> {this.state.loginError} </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);