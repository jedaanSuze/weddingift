import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import * as auth from "../helpers/auth";
import ProtectedRoute from './ProtectedRoute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            username: '',
            password: ''
        };
    }

    handleLogIn = (event) => {
        debugger;
        let done = auth.logIn(this.state.username, this.state.password);
        this.setState(() => ({
            redirectToReferrer: done
        }));

    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer === true) {
            this.props.history.push(from.pathname);
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={(event) => this.handleLogIn(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
Login.propTypes = {};

export default Login;
