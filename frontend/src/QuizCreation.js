import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class QuizCreation extends Component {
  render() {

    return (
      <Form>
        <FormGroup>
          <legend>Question</legend>
          <Input type="textarea" name="question" id="question" placeholder="Question" />
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
              <Input type="textarea" name="text" id="optionOne" placeholder="Option One" />
            </Label>
          </FormGroup>
          <FormGroup check>

            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="text" id="optionTwo" placeholder="Option Two" />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="text" id="optionThree" placeholder="Option Three" />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="text" id="optionFour" placeholder="Option Four" />
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default QuizCreation;