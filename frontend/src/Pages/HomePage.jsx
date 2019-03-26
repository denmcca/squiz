import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
// import DueDates from '../Components/DueDates'
import CourseList from '../Components/CourseList'
import UserInfo from '../Components/UserInfo'

import {DueDatesTable, DueDates} from '../Components/DueDates';
export default class HomePage extends Component {
  constructor() {
    super();
    // the state stores the list of questions 
    this.state = {
      courses: [{ courseName: "CECS 445" }, { courseName: "CECS 491A" }, { courseName: "CECS 475" }, { courseName: "CECS 428" }],
      courseCollapse: true
    }
  }
  displayCourse() {
    this.setState({ courseCollapse: !this.state.courseCollapse });
  }
  render() {
    return (
      <Row>
        {/* Courses list */}
        <Col className="course-List">
          <UserInfo />
          <CourseList/>
        </Col>
        {/* Recent Grades */}
        <Col className="recent-Grades">
          Recent Grades
        </Col>
        {/* Announcements */}
        <Col className="announcements">
          Announcements
        </Col>
        {/* Due Dates */}
        <Col className="due-Dates">
          <DueDatesTable />
          {/* <DueDates /> */}
        </Col>
      </Row>
    )
  }
}