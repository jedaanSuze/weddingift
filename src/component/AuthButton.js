import React from 'react';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import fakeAuthCentralState from "../helpers/auth";


const AuthButton = withRouter(({ history }) => (
    fakeAuthCentralState.isAuthenticated ? (
        <p>Welcome to this amazing content! <button onClick={() => {
            fakeAuthCentralState.signout(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
));

AuthButton.propTypes = {};


export default AuthButton;
