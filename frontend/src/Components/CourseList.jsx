import React, { Component } from 'react';
import {
    Collapse,
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';
import {
    IoIosArrowDown,
    IoIosArrowForward
} from 'react-icons/io';
import {db} from '../firebase'
export default class CourseList extends Component {
    constructor() {
        super();
        // the state stores the list of questions 
        this.state = {
            courses: [],
            courseCollapse: true
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        // the database stores the grade under /account/user ID/grades
        var dbRef = db.ref("/account/" + localStorage.getItem('user') + "/classes/")
        var coursesFromDB = []
        await dbRef.once("value", classes => {
            // the list of classes is returned by dbRef.once
            classes.forEach(courseKey => {
                // each course has a key of 0, 1, 2, etc.
                courseKey.forEach(course => {
                    coursesFromDB.push({
                        courseName: course.val()
                    })
                })
            })
        })
        this.setState({ courses: coursesFromDB })
    }
    displayCourse() {
        this.setState({ courseCollapse: !this.state.courseCollapse });
    }
    render() {
        console.log('Rendering CourseList')
        return (
            <div className='shadow'>
                <ListGroup>
                    <Button onClick={this.displayCourse.bind(this)} className="course-List-Button">

                        <div style={this.state.courseCollapse ? { display: '' } : { display: 'none' }}>
                            Courses
                    <IoIosArrowDown></IoIosArrowDown>
                        </div>
                        <div style={this.state.courseCollapse ? { display: 'none' } : { display: '' }}>
                            Courses
                    <IoIosArrowForward></IoIosArrowForward>
                        </div>
                    </Button>
                    <Collapse isOpen={this.state.courseCollapse}>
                        {
                            // Display the list of questions that have been added to the list
                            this.state.courses.map((val, idx) => {
                                return (
                                    <ListGroupItem>
                                        {this.state.courses[idx].courseName}
                                    </ListGroupItem>
                                )
                            })
                        }
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}