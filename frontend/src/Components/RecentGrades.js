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
    // fetch from database
    fetchData = async () => {
        // the database stores the grade under /account/user ID/grades
        var dbRef = db.ref("/account/" + localStorage.getItem('user') + "/grades/")
        var gradesFromDB = []
        await dbRef.once("value", grade => {
            // each grade is listed based on the course
            grade.forEach(course => {
                // each course have several quizzes in it
                course.forEach(quiz => {
                    // for each of the quizzes in each course in the grades database
                    // push it into the list to update the view
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