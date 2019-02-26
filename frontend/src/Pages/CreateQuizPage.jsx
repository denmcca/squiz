import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class CreateQuizPage extends Component {
  render() {

    return (
      <Form>
        <FormGroup style = {{marginLeft: '100px', marginRight: '100px'}}>
          <legend>Question</legend>
          <Input type="textarea" name="question" placeholder="Question"/>
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
              <Input type="textarea" name="optionOne" placeholder="Option One" style = {{width: "500px"}} />
            </Label>
          </FormGroup>
          <FormGroup check>

            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionTwo" placeholder="Option Two" style = {{width: "500px"}}/>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name ="optionThree" placeholder="Option Three" style = {{width: "500px"}}/>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name= "optionFour" placeholder="Option Four" style = {{width: "500px"}}/>
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default CreateQuizPage;