import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Logout from '../components/Logout';

const App = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <Route exact path="/logout" component={Logout} />
    </Switch>
);

export default App;
