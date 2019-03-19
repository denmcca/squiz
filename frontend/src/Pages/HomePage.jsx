import React, { Component } from 'react';
import {
  Row,
  Col,
  Collapse,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardBody
} from 'reactstrap';
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

  }
  render() {
    return (
      <Row>
        {/* Courses list */}
        <Col className="course-List">

          <ListGroup>
            <Button onClick={this.displayCourse}>
              Courses
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
          Due Dates
        </Col>
      </Row>
    )
  }
}