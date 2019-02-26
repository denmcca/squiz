import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class CreateQuizPage extends Component {
  constructor() {
    super();
    // the state stores the list of questions 
    this.state = {
      questions: [{ question: "Question Name Here", optionOne: "", optionTwo: "", optionThree: "", optionFour: "" }],
    }
    // listeners
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  // adding a question to the list
  addQuestion = (e) => {
    this.setState((prevState) => ({
      // add a new set of question to the list
      questions: [...prevState.questions, { question: "", optionOne: "", optionTwo: "", optionThree: "", optionFour: "" }],
    }));
  }
  render() {
    return (
      <Form>
        <FormGroup style={{ marginLeft: '100px', marginRight: '100px' }}>
          <legend>Question</legend>
          <Input type="textarea" name="question" placeholder="Question" />
        </FormGroup>
        <FormGroup>
          <FormText color="muted">
            Write the quiz question above, and then select the correct answer by selecting the radiobutton on its side.
        </FormText>
        </FormGroup>
        <FormGroup tag="answers">
          <legend>Answers</legend>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionOne" placeholder="Option One" style={{ width: "500px" }} />
            </Label>
          </FormGroup>
          <FormGroup check>

            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionTwo" placeholder="Option Two" style={{ width: "500px" }} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionThree" placeholder="Option Three" style={{ width: "500px" }} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionFour" placeholder="Option Four" style={{ width: "500px" }} />
            </Label>
          </FormGroup>
        </FormGroup>
        <Button onClick = {this.addQuestion}>Add New Question</Button>{
          // Display the list of questions that have been added to the list
          this.state.questions.map((val,idx) => {
            let questionID = `question-${idx}`
            return(
              <div key = {idx}>
                {/** Label of the question */}
                <label htmlFor={questionID}>{`Question #${idx+1}`}</label>
                <input
                type = "text"
                name = {questionID}
                data-id = {idx}
                id = {questionID}
                value = {this.state.questions[idx].question}

                />
              </div>
            )
          })
        }
      </Form>
    );
  }
}

export default CreateQuizPage;