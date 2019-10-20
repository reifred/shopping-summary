import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class EstimatedTotal extends Component {
    render(){
        return (
            <Row>
                <Col xs={6}><h4>Est. Total</h4></Col>
                <Col xs={6}><h4>{`$${this.props.price}`}</h4></Col>
            </Row>
        );
    }
}
