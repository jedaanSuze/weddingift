import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute';
import AuthButton from './component/AuthButton';
import Public from './component/Public';
import Protected from './component/Protected';
import Login from './component/Login';
import QRGenerator from './component/QRGenerator';
import QRReader from './component/QRReader';
import MainPage from "./component/MainPage";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <AuthButton/>
                        <ul>
                            <li><Link to="/public">Public Content</Link></li>
                            <li><Link to="/protected">Protected Content</Link></li>
                        </ul>
                        <Route path="/login" component={withRouter(Login)}/>
                        <Route path="/public" component={Public}/>
                        <ProtectedRoute path='/main-page' component={MainPage}/>
                        <ProtectedRoute path='/protected' component={Protected}/>
                        <ProtectedRoute path='/qrGenerator' component={QRGenerator}/>
                        <ProtectedRoute path='/qrReader' component={QRReader}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
