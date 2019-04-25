import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import { db } from '../firebase'
export default class RecentGrades extends Component {
    constructor() {
        super();
        this.state = {
            grades: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    // fetch from database instead of hardcoding later
    fetchData = async () => {
        var dbRef = db.ref("/account/" + localStorage.getItem('user') + "/grades/")
        var gradesFromDB = []
        await dbRef.once("value", grade => {
            grade.forEach(course => {
                course.forEach(quiz => {
                    gradesFromDB.push({
                        courseName: course.key,
                        quizName: quiz.key,
                        grade: quiz.val()
                    })
                })
            })
        })
        this.setState({ grades: gradesFromDB })
    }
    render() {
        return (
            <div className='shadow'>
                <ListGroup>
                    <ListGroupItem>
                        <font size="4">
                            <b>Recent Grades</b>
                        </font>
                        <div style={{ height: 400, overflow: "auto" }}>
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
            </div>
        )
    }
}