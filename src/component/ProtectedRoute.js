import React from 'react';
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import * as auth from "../helpers/auth";


const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        auth.IsAuthenticated() === true ?
            <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    )}/>
);

ProtectedRoute.propTypes = {};


export default ProtectedRoute;
