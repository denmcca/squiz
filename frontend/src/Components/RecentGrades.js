import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export default class RecentGrades extends Component {
    constructor() {
        super();
        this.state = {
            grades: []
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    // fetch from database instead of hardcoding later
    fetchData = async () => {
        this.setState({grades: [
            {
                courseName: "CECS 445",
                quizName: "Quiz 1",
                grade: "67%"
            },
            {
                courseName: "CECS 445",
                quizName: "Quiz 2",
                grade: "87%"
            },
            {
                courseName: "CECS 475",
                quizName: "Exam 2",
                grade: "47%"
            },
            {
                courseName: "CECS 428",
                quizName: "Final Exam",
                grade: "97%"
            },
            {
                courseName: "CECS 445",
                quizName: "Quiz 2",
                grade: "87%"
            },
            {
                courseName: "CECS 475",
                quizName: "Exam 2",
                grade: "47%"
            },
            {
                courseName: "CECS 428",
                quizName: "Final Exam",
                grade: "97%"
            },
            {
                courseName: "CECS 445",
                quizName: "Quiz 2",
                grade: "87%"
            },
            {
                courseName: "CECS 475",
                quizName: "Exam 2",
                grade: "47%"
            },
            {
                courseName: "CECS 428",
                quizName: "Final Exam",
                grade: "97%"
            }
        ]})
    }
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <font size="4">
                        <b>Recent Grades</b>
                    </font>
                    <div style = {{height: 400, overflow: "auto"}}>
                        {
                            // Display the list of questions that have been added to the list
                            this.state.grades.map((val, idx) => {
                                return (
                                    <ListGroupItem>
                                        <font size="3">
                                            <b>{this.state.grades[idx].courseName}</b>
                                            <br />
                                        </font>
                                        <font size="2">
                                            {this.state.grades[idx].quizName}<br />
                                            {this.state.grades[idx].grade}<br />
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