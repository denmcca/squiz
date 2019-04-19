import React, { Component } from "react";
import "../App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ListGroup,
  Col,
  Row,
  ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';

class CreateQuizPage extends Component {
  // constructor() {
  //   super();
  //   // the state stores the list of questions 
  //   this.state = {
  //     questions: [
  //       {
  //         question: "Seven properties associated with life",
  //         optionOne: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption.",
  //         optionTwo: "Donec rutrum placerat gravida.",
  //         optionThree: "Quisque iaculis tellus eget.",
  //         optionFour: "Fusce blandit justo sit.",
  //         rightAnswer: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption."
  //       },
  //     ],
  //     question: "",
  //     optionOne: "",
  //     optionTwo: "",
  //     optionThree: "",
  //     optionFour: "",
  //     rightAnswer: "",
  //     addPrompt: false,
  //   }
  //   // listeners
  //   //this.handleInputChange = this.handleInputChange.bind(this);
  //   //this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // adding a question to the list
  addQuestion = (e) => {
    if (this.props.rightAnswer !== "") {
      this.setState((prevState) => ({
        // add a new set of question to the list
        questions: [...prevState.questions,
        {
          question: this.props.question, optionOne: this.props.optionOne, optionTwo: this.props.optionTwo,
          optionThree: this.props.optionThree, optionFour: this.props.optionFour, rightAnswer: this.props.rightAnswer
        }],
        // clear previous inputs
        question: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        rightAnswer: "",
        // disable prompt
        addPrompt: false
      }));
    } else {
      alert("Please input the Answer");
    }
    console.log(this.props.questions);
  }
  removeQuestion(index) {
    var newQuestionList = [...this.props.questions];
    if (index !== -1) {
      newQuestionList.splice(index, 1);
      this.setState({ questions: newQuestionList });
    }
  }
  toggleAddPrompt() {
    this.setState({ addPrompt: false });
  }
  render() {
    return (
      <div className="container">
        <Modal isOpen={this.props.addPrompt}>
          <ModalHeader>Add A Question</ModalHeader>
          <ModalBody>

            <FormGroup>
              <legend>Question</legend>
              <Input placeholder="Question"
                onChange={(text) => {
                  this.setState({ question: text.target.value });
                  console.log(this.props.question);
                }} />
            </FormGroup>
            <FormGroup>
              <FormText color="muted">
                Write the quiz question above, and then select the correct answer by selecting the radiobutton on its side.
        </FormText>
            </FormGroup>
            <FormGroup tag="answers">
              <legend>Answers</legend>
              <FormGroup check>
                <Input type="radio" name="radio1" value={this.props.optionOne}
                  onChange={() => { this.setState({ rightAnswer: this.props.optionOne }) }} />{' '}
                <Label check>
                  <Input type="textarea" name="optionOne" placeholder="Option One" style={{ width: "240%" }}
                    onChange={(text) => this.setState({ optionOne: text.target.value })} />
                </Label>
              </FormGroup>
              <FormGroup check>

                <Input type="radio" name="radio1" value={this.props.optionTwo}
                  onChange={() => { this.setState({ rightAnswer: this.props.optionTwo }) }} />{' '}
                <Label check>
                  <Input type="textarea" name="optionTwo" placeholder="Option Two" style={{ width: "240%" }}
                    onChange={(text) => this.setState({ optionTwo: text.target.value })} />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input type="radio" name="radio1" value={this.props.optionThree}
                  onChange={() => { this.setState({ rightAnswer: this.props.optionThree }) }} />{' '}
                <Label check>
                  <Input type="textarea" name="optionThree" placeholder="Option Three" style={{ width: "240%" }}
                    onChange={(text) => this.setState({ optionThree: text.target.value })} />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input type="radio" name="radio1" value={this.props.optionFour}
                  onChange={() => { this.setState({ rightAnswer: this.props.optionFour }) }} />{' '}
                <Label check>
                  <Input type="textarea" name="optionFour" placeholder="Option Four" style={{ width: "240%" }}
                    onChange={(text) => this.setState({ optionFour: text.target.value })} />
                </Label>
              </FormGroup>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.addQuestion}>Add New Question</Button>
            <Button onClick={() => this.setState({ addPrompt: false })}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Form>
          <legend> Create A Quiz </legend>

          <Button onClick={() => this.setState({ addPrompt: true })}>Add New Question</Button>
          <br />
          <br />
          <Button>Submit Quiz</Button>
          <br />
          <Row>
            {
              // Display the list of questions that have been added to the list
              this.props.questions.map((val, idx) => {
                let questionID = `question-${idx}`
                return (
                  <Col xs={6}>
                    <div key={idx}>
                      {/** Label of the question */}

                      <label htmlFor={questionID} className="questions-List">
                        <ListGroup className="question-Alignment">
                          <ListGroupItem >
                            {`${idx + 1}`}: {this.props.questions[idx].question}
                          </ListGroupItem>
                          <ListGroupItem>
                            a: {this.props.questions[idx].optionOne}
                          </ListGroupItem>
                          <ListGroupItem>
                            b: {this.props.questions[idx].optionTwo}
                          </ListGroupItem>
                          <ListGroupItem>
                            c: {this.props.questions[idx].optionThree}
                          </ListGroupItem>
                          <ListGroupItem>
                            d: {this.props.questions[idx].optionFour}
                          </ListGroupItem>
                          <ListGroupItem>
                            Answer: {this.props.questions[idx].rightAnswer}
                          </ListGroupItem>
                          <Button onClick={() => { this.removeQuestion(idx); }}>Remove Question</Button>
                        </ListGroup>
                      </label>

                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.isLoggedIn,
    questions:state.questions,
    question:state.question,
    optionOne:state.optionOne,
    optionTwo:state.optionTwo,
    optionThree:state.optionThree,
    optionFour:state.optionFour,
    rightAnswer:state.rightAnswer,
    addPrompt:state.addPrompt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // logUserOut: () => dispatch({type: 'LOGOUT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuizPage)