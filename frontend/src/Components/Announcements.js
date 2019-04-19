import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export default class Announcements extends Component {
    constructor() {
        super();
        this.state = {
            announcements: []
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    // fetch from database instead of hardcoding later
    fetchData = async () => {
        this.setState({announcements: [
            {
                courseName: "CECS 445",
                announcementName: "Quiz 1",
                info: "The grades for quiz 1 has been posted"
            },
        ]})
    }
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <font size="4">
                        <b>Announcements</b>
                    </font>
                    <div style = {{height: 400, overflow: "auto"}}>
                        {
                            // Display the list of questions that have been added to the list
                            this.state.announcements.map((val, idx) => {
                                return (
                                    <ListGroupItem>
                                        <font size="3">
                                            <b>{this.state.announcements[idx].courseName}</b>
                                            <br />
                                        </font>
                                        <font size="2">
                                            {this.state.announcements[idx].announcementName}<br />
                                            {this.state.announcements[idx].info}<br />
                                        </font>
                                    </ListGroupItem>
                                )
                            })
                        }
                    </div>
                </ListGroupItem>
            </ListGroup>
        )
    }
}