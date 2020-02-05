import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextBox from '../components/FormControls/TextBox';
import * as userActions from '../actions/user';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rememberMe: true
        };
    }

    onLoginSubmit = (values) => {
        const { login } = this.props;
        const { rememberMe } = this.state;
        if (values.username && values.password) {
            login(values.username, values.password, rememberMe);
        }
    }

    changeHandler = () => {
        this.setState(prevState => ({
            rememberMe: !prevState.rememberMe
        }));
    }

    render() {
        const { userInfo, history, handleSubmit } = this.props;
        const { loggingIn, loggedIn, errorMessage } = userInfo;
        const { rememberMe } = this.state;
        return (
            <div className="container">
                <div className="login-wrapper">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(this.onLoginSubmit)}>
                        <Field
                            component={TextBox}
                            placeholder="Enter username"
                            type="text"
                            customStyle=""
                            faIcon="fa-user"
                            name="username"
                        />
                        <Field
                            component={TextBox}
                            placeholder="Enter password"
                            type="password"
                            customStyle=""
                            faIcon="fa-key"
                            name="password"
                        />
                        <div className="row align-items-center remember">
                            <input type="checkbox" checked={rememberMe} onChange={this.changeHandler} />Remember Me
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" disabled={loggingIn} className="btn float-right login-btn" />
                        </div>
                    </form>
                    {loggedIn ? history.push('/home') : null}
                    {errorMessage && <p className="error-msg">{errorMessage}</p>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.user
});

const mapDispatchToProps = (dispatch) => ({
    login: (name, pwd, rememberMe) => dispatch(userActions.login(name, pwd, rememberMe))
});

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Please enter username";
    }
    if (!values.password) {
        errors.password = "Please enter password";
    }
    return errors;
}

export default reduxForm({
    form: 'LoginForm',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(LoginPage)); 
