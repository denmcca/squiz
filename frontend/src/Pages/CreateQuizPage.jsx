import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
class CreateQuizPage extends Component {
  constructor() {
    super();
    // the state stores the list of questions 
    this.state = {
      questions: [],
      question: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      rightAnswer: "",
      addPrompt: false,
    }
    // listeners
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  // adding a question to the list
  addQuestion = (e) => {
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
        // disable prompt
        addPrompt: false
      }));
    } else {
      alert("Please input the Answer");
    }
    console.log(this.state.questions);
  }
  removeQuestion(index) {
    var newQuestionList = [...this.state.questions];
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
      <div>
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
        <Form>
          <legend> Create A Quiz </legend>
          <Button onClick={() => this.setState({ addPrompt: true })}>Add New Question</Button>
          <br />
          <Button>Submit Quiz</Button>
          {
            // Display the list of questions that have been added to the list
            this.state.questions.map((val, idx) => {
              let questionID = `question-${idx}`
              return (
                <div key={idx}>
                  {/** Label of the question */}
                  <label htmlFor={questionID}>
                    {`Question #${idx + 1}`}
                    <br /> {this.state.questions[idx].question}
                    <br /> {this.state.questions[idx].optionOne}
                    <br /> {this.state.questions[idx].optionTwo}
                    <br /> {this.state.questions[idx].optionThree}
                    <br /> {this.state.questions[idx].optionFour}
                    <br /> Answer: {this.state.questions[idx].rightAnswer}
                  </label>
                  <br />
                  <Button onClick={() => { this.removeQuestion(idx); }}>Remove Question</Button>
                </div>
              )
            })
          }
        </Form>
      </div>
    );
  }
}

export default CreateQuizPage;