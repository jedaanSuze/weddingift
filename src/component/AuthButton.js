import React from 'react';
import {Redirect,withRouter} from "react-router-dom";
import * as auth from "../helpers/auth";


const AuthButton = withRouter(({history}) => (
    auth.IsAuthenticated() ? (
        <p>Welcome to this amazing content! <button onClick={() => {
            auth.SignOut(() => history.push('/'))
        }}>Sign out</button>
        </p>
    ) : (
        <div>
            return <Redirect to='/login'  />
        </div>
    )
));

AuthButton.propTypes = {};


export default AuthButton;
