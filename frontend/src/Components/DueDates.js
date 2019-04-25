import React from 'react';
import {
  Row,
  Col,
  Collapse,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardBody,
  Table
} from 'reactstrap';




export class DueDates extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        // the state stores the list of questions 
        this.state = {
            assignments: [
            ],  
            datesCollapse: true,
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    // do a database fetch instead of hardcoding
    fetchData = async () => {
        this.setState({
            assignments: [
            { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
            { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
            { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
            { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' }]
        })
    }
    render() 
    {
        return(
            <Col className="course-List">
                <ListGroup>
                    <Button onClick={this.toggle}> Upcoming Due Dates </Button>
                    <Row>
                        <Col>Title</Col>
                        <Col>Professor</Col>
                        <Col>Date</Col>
                        <Col>Course</Col>
                    </Row>
                    <Collapse isOpen={this.state.datesCollapse}>{
                        // Display the list of questions that have been added to the list
                        this.state.assignments.map((val, idx) => {
                            return (
                                <ListGroupItem>
                                    <Row>
                                        <Col>{this.state.assignments[idx].title}</Col>
                                        <Col>{this.state.assignments[idx].prof}</Col>
                                        <Col>{this.state.assignments[idx].date}</Col>
                                        <Col>{this.state.assignments[idx].course}</Col>
                                    </Row>
                                </ListGroupItem>
                            )
                        })
                    }
                    </Collapse>
                </ListGroup>
            </Col>
        )
    }

    toggle() {
        this.setState(state => ({ datesCollapse: !state.datesCollapse }));
    }
}


export class DueDatesTable extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        // the state stores the list of questions 
        this.state = {
            assignments: [
                { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
                { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
                { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' },  
                { title: 'Title here', prof: 'Prof here', date: 'Date here', course: 'Course here' }
            ],  
            datesCollapse: true,
        }
    }

    render() 
    {
        return(
            <div className = 'shadow'>
                <ListGroup>
                    <ListGroupItem>
                        <row>
                            <font size="4">
                                <b>Upcoming Due Dates</b>
                            </font>
                            <Table striped bordered hover /*responsive size="lg" */>
                                <thead>
                                    <tr>
                                        <th width="25%">TITLE</th>
                                        <th width="25%">PROFESSOR</th>
                                        <th width="25%">DATE</th>
                                        <th width="25%">COURSE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.assignments.map((val, idx) => {
                                        return(
                                            <tr>
                                                <th scope="row">{this.state.assignments[idx].title}</th>
                                                <td>{this.state.assignments[idx].prof}</td>
                                                <td>{this.state.assignments[idx].date}</td>
                                                <td>{this.state.assignments[idx].course}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>                
                            </Table>
                        </row>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }

    toggle() {
        this.setState(state => ({ datesCollapse: !state.datesCollapse }));
    }
}

export default DueDates;