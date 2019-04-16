import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
// import DueDates from '../Components/DueDates'
import CourseList from '../Components/CourseList'
import UserInfo from '../Components/UserInfo'
import RecentGrades from '../Components/RecentGrades'
import Announcements from '../Components/Announcements'

import { DueDatesTable, DueDates } from '../Components/DueDates';
import firebase from '../firebase'
export default class HomePage extends Component {

  constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
    // the state stores the list of questions 
    this.state = {
      courses: [{ courseName: "CECS 445" }, { courseName: "CECS 491A" }, { courseName: "CECS 475" }, { courseName: "CECS 428" }],
      courseCollapse: true
    }
  }
  displayCourse() {
    this.setState({ courseCollapse: !this.state.courseCollapse });
  }
    logout() {
        firebase.auth().signOut();
    }

  render() {
    return (
        <div>
      <Row style = {{marginLeft: 3, marginRight: 3}}>
        {/* Courses list */}
        <Col className="course-List">
          <br />
          <UserInfo />
          <CourseList />
        </Col>
        {/* Recent Grades */}
        <Col className="recent-Grades" xs = "2">
          <br />
          <RecentGrades />
        </Col>
        {/* Announcements */}
        <Col className="announcements">
          <br />
          <Announcements />
        </Col>
        {/* Due Dates */}
        <Col className="due-Dates">
          <br />
          <DueDatesTable />
          {/* <DueDates /> */}
        </Col>
      </Row>
            <button onClick={this.logout}>Logout</button>
        </div>
    )
  }
}