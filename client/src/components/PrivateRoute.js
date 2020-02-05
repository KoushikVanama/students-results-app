import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, userInfo, ...rest }) => (
    <Route {...rest} render={props => (
        Object.keys(userInfo.user).length > 0
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
);

const mapStateToProps = state => ({
    userInfo: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
