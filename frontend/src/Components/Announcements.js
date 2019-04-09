import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export default class Announcements extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    Announcements
                </ListGroupItem>
            </ListGroup>
        )
    }
}