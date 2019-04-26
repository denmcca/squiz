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
import {db} from '../firebase'
import firebase from 'firebase'
class CreateQuizPage extends Component {
  constructor() {
    super();
    // the state stores the list of questions 
    this.state = {
      questions: [
        {
          // Debug testing - starting with a given array of question
          question: "Seven properties associated with life",
          optionOne: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption.",
          optionTwo: "Donec rutrum placerat gravida.",
          optionThree: "Quisque iaculis tellus eget.",
          optionFour: "Fusce blandit justo sit.",
          rightAnswer: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption."
        },
      ],
      question: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      rightAnswer: "",
      addPrompt: false,
      quizName: ""
    }
    // listeners
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  submitQuiz = async () => {
    var dbRef = db.ref("account/" + localStorage.getItem('user') + "/quizzes/" + this.state.quizName + "/")
    if (this.state.quizName === "") {
      alert("Quiz Name can not be empty!")
    } else {
      this.state.questions.forEach(question => {
        dbRef.child(question.question).set({
          optionOne: question.optionOne,
          optionTwo: question.optionTwo,
          optionThree: question.optionThree,
          optionFour: question.optionFour,
          rightAnswer: question.rightAnswer
        })
      })
    }
  }
  // adding a question to the list
  addQuestion = (e) => {
    // if the right answer is not empty, then add the question
    if (this.state.rightAnswer !== "") {
      this.setState((prevState) => ({
        // add a new set of question to the list
        questions: [...prevState.questions,
        {
          question: this.state.question, optionOne: this.state.optionOne, optionTwo: this.state.optionTwo,
          optionThree: this.state.optionThree, optionFour: this.state.optionFour, rightAnswer: this.state.rightAnswer
        }],
        // clear previous inputs
        question: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        rightAnswer: "",
        // disable prompt (close the modal)
        addPrompt: false
      }));
    } else {
      // prompt user to add the right answer
      alert("Please input the Answer");
    }
    console.log("Create Quiz Page");
    console.log(this.state.questions);
  }
  // remove a question from the list
  // arg: index of the question to be removed
  removeQuestion(index) {
    var newQuestionList = [...this.state.questions];
    if (index !== -1) {
      // remove the given index
      newQuestionList.splice(index, 1);
      // update the state variable
      this.setState({ questions: newQuestionList });
    }
  }
  // toggles the modal for adding the question
  toggleAddPrompt() {
    this.setState({ addPrompt: false });
  }
  // the displayed page
  render() {
    return (
      <div className="app-size" align='center'>
        <div className='shadow'>
          {/* The Prompt for adding a question, its a modal or a 'pop-up' */}
          <Modal isOpen={this.state.addPrompt}>
            <ModalHeader>Add A Question</ModalHeader>
            <ModalBody>

              <FormGroup>
                <legend>Question</legend>
                <Input placeholder="Question"
                  onChange={(text) => {
                    this.setState({ question: text.target.value });
                    console.log(this.state.question);
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
                  <Input type="radio" name="radio1" value={this.state.optionOne}
                    onChange={() => { this.setState({ rightAnswer: this.state.optionOne }) }} />{' '}
                  <Label check>
                    <Input type="textarea" name="optionOne" placeholder="Option One" style={{ width: "240%" }}
                      onChange={(text) => this.setState({ optionOne: text.target.value })} />
                  </Label>
                </FormGroup>
                <FormGroup check>

                  <Input type="radio" name="radio1" value={this.state.optionTwo}
                    onChange={() => { this.setState({ rightAnswer: this.state.optionTwo }) }} />{' '}
                  <Label check>
                    <Input type="textarea" name="optionTwo" placeholder="Option Two" style={{ width: "240%" }}
                      onChange={(text) => this.setState({ optionTwo: text.target.value })} />
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" name="radio1" value={this.state.optionThree}
                    onChange={() => { this.setState({ rightAnswer: this.state.optionThree }) }} />{' '}
                  <Label check>
                    <Input type="textarea" name="optionThree" placeholder="Option Three" style={{ width: "240%" }}
                      onChange={(text) => this.setState({ optionThree: text.target.value })} />
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" name="radio1" value={this.state.optionFour}
                    onChange={() => { this.setState({ rightAnswer: this.state.optionFour }) }} />{' '}
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
          {/* The display of the page without the prompt */}
          <Form >
            <legend> Create A Quiz </legend>
            <text>Quiz Name</text>
            <Input type="textarea" name="optionOne" placeholder="Quiz Name" style={{ width: "50%", height: "50%" }}
              onChange={(text) => this.setState({ quizName: text.target.value })} />
            <Button onClick={() => this.setState({ addPrompt: true })}>Add New Question</Button>
            <br />
            <br />
            {/* <Button>Submit Quiz</Button> */}
            <Button onClick={() => this.submitQuiz()}>Submit Quiz</Button>
            <br />
            <Row align='center' margin={100}>
              {
                // Display the list of questions that have been added to the list
                this.state.questions.map((val, idx) => {
                  let questionID = `question-${idx}`
                  return (
                    <Col align='center' margin={100}>
                      <div key={idx}>
                        {/** Label of the question */}

                        <label htmlFor={questionID} className="questions-List">
                          <ListGroup className="question-Alignment">
                            <ListGroupItem >
                              {`${idx + 1}`}: {this.state.questions[idx].question}
                            </ListGroupItem>
                            <ListGroupItem>
                              a: {this.state.questions[idx].optionOne}
                            </ListGroupItem>
                            <ListGroupItem>
                              b: {this.state.questions[idx].optionTwo}
                            </ListGroupItem>
                            <ListGroupItem>
                              c: {this.state.questions[idx].optionThree}
                            </ListGroupItem>
                            <ListGroupItem>
                              d: {this.state.questions[idx].optionFour}
                            </ListGroupItem>
                            <ListGroupItem>
                              Answer: {this.state.questions[idx].rightAnswer}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    // questions:state.rQuiz.questions,
    // question:state.rQuiz.question,
    // optionOne:state.rQuiz.optionOne,
    // optionTwo:state.rQuiz.optionTwo,
    // optionThree:state.rQuiz.optionThree,
    // optionFour:state.rQuiz.optionFour,
    // rightAnswer:state.rQuiz.rightAnswer,
    // addPrompt:state.rQuiz.addPrompt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sumbitQuestion: () => dispatch({ type: 'SUBMIT_QUESTION' }),
    removeQuestion: () => dispatch({ type: 'REMOVE_QUESTION' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuizPage)