import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import {
    IoIosPerson
} from 'react-icons/io';

export default class UserInfo extends Component {
    constructor() {
        super();
        // the state stores the list of questions 
        this.state = {
            user: "John Doe"
        }
    }
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <IoIosPerson />
                        {this.state.user}
                </ListGroupItem>
            </ListGroup>
        )
    }
}