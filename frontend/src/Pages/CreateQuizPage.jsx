import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      optionFour: ""
    }
    // listeners
    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  // adding a question to the list
  addQuestion = (e) => {
    this.setState((prevState) => ({
      // add a new set of question to the list
      questions: [...prevState.questions, 
        { question: this.state.question, optionOne: this.state.optionOne, optionTwo: this.state.optionTwo, 
          optionThree: this.state.optionThree, optionFour: this.state.optionFour }],
    }));
    console.log(this.state.questions);
  }
  removeQuestion(index){
    var newQuestionList = [...this.state.questions];
    if(index !== -1){
      newQuestionList.splice(index, 1);
      this.setState({questions: newQuestionList});
    }
  }
  render() {
    return (
      <Form>
        <FormGroup style={{ marginLeft: '100px', marginRight: '100px' }}>
          <legend>Question</legend>
          <Input placeholder="Question" 
          onChange = {(text) => {
          this.setState({question: text.target.value});
          console.log(this.state.question);
        }}/>
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
              <Input type="textarea" name="optionOne" placeholder="Option One" style={{ width: "500px" }} 
              onChange = {(text)=> this.setState({optionOne: text.target.value})} />
            </Label>
          </FormGroup>
          <FormGroup check>

            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionTwo" placeholder="Option Two" style={{ width: "500px" }} 
              onChange = {(text)=> this.setState({optionTwo: text.target.value})} />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionThree" placeholder="Option Three" style={{ width: "500px" }}
              onChange = {(text)=> this.setState({optionThree: text.target.value})}  />
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name="radio1" />{' '}
            <Label check>
              <Input type="textarea" name="optionFour" placeholder="Option Four" style={{ width: "500px" }} 
              onChange = {(text)=> this.setState({optionFour: text.target.value})} />
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
                <label htmlFor={questionID}>
                {`Question #${idx+1}`} 
                <br/> {this.state.questions[idx].question}
                <br/> {this.state.questions[idx].optionOne}
                <br/> {this.state.questions[idx].optionTwo}
                <br/> {this.state.questions[idx].optionThree}
                <br/> {this.state.questions[idx].optionFour}
                </label>
                <Button onClick = {() => {this.removeQuestion(idx);}}>Remove Question</Button>
              </div>
            )
          })
        }
      </Form>
    );
  }
}

export default CreateQuizPage;