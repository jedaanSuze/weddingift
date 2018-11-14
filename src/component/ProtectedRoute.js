import React from 'react';
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import fakeAuthCentralState from "../helpers/auth";

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuthCentralState.isAuthenticated === true ?
            <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);

ProtectedRoute.propTypes = {};


export default ProtectedRoute;
