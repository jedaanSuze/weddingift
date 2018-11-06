import React, {Component} from 'react';
import PropTypes from "prop-types";
import QRCode from 'qrcode.react';

class QRGenerator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};

    }

    /*
    render
     */
    render() {
        const obj = {
            id: 1234,
            name: "jedaan shammas",
        }
        return (
            <div>
                <QRCode value={obj}/>,
            </div>

        );

    }
}

QRGenerator.propTypes = {};

export default QRGenerator;
