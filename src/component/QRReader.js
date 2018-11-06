import React, {Component} from 'react';
import PropTypes from "prop-types";
import QrReader from "react-qr-reader";

class QRReader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            delay: 300,
            result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data
            });
        }
    }
    handleError(err) {
        console.error(err);
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "100%" }}
                />
                <p>{this.state.result}</p>
            </div>
        );
    }
}

QRReader.propTypes = {};

export default QRReader;
