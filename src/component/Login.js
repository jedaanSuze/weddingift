import React from "react";
import fakeAuthCentralState from "../helpers/auth";
import {Container, Row, Col, Input, Button} from 'mdbreact';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            username: '',
            password: ''
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

    updateEmail(value) {
        this.setState({
            email: value,
        });
    }

    updatePassword(value) {
        this.setState({
            password: value,
        });
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer === true) {
            this.props.history.push(from.pathname);
        }
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                       success="right" onChange={(event) => {
                                    this.updateEmail(event.target.value)
                                }}
                                />
                                <Input label="Type your password" icon="lock" group type="password" validate
                                       onChange={(event) => {
                                           this.updatePassword(event.target.value)
                                       }}/>
                            </div>
                            <div className="text-center">
                                <Button onClick={() => this.login()}>Login</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Login.propTypes = {};

export default Login;
