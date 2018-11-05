import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import fakeAuthCentralState from "../helpers/auth";
import ProtectedRoute from './ProtectedRoute';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
    }

    login = () => {
        debugger;
        fakeAuthCentralState.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }));
        });
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer === true) {
            this.props.history.push(from.pathname);
        }
        return (
            <div>
                <p>Please, you need to be authenticated to to view this content</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

Login.propTypes = {};

export default Login;
