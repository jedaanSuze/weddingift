import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './component/ProtectedRoute';
import AuthButton from './component/AuthButton';
import Public from './component/Public';
import Protected from './component/Protected';
import Login from './component/Login';
import QRGenerator from './component/QRGenerator';
import QRReader from './component/QRReader';
import MainPage from "./component/MainPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <AuthButton/>

                        <Route path="/login" component={withRouter(Login)}/>
                        <Route path="/public" component={Public}/>
                        <ProtectedRoute path='/main-page' component={MainPage}/>
                        {/*<ProtectedRoute path='/protected' component={Protected}/>
                        <ProtectedRoute path='/qrGenerator' component={QRGenerator}/>
                        <ProtectedRoute path='/qrReader' component={QRReader}/>*/}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
