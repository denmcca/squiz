import React, { Component } from "react";
import "../App.css";
import "../QuizTaking.css";
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
} from "reactstrap";
import { connect } from "react-redux";
import { db } from "../firebase";
export default class QuizTakingPage extends Component {
  constructor() {
    super();
    // the state stores the list of questions
    this.state = {
      test: "hello world!",
      quizList: [],
      QuizName: "default value",
      // Reference on displaying questions
      // they are stored as a json after you click which quiz to take
      // stored as an array of json as shown below[example shown below is a list of one]:
      // [{
      //  question: "Question here",
      //  possibleAnswers: [possibleAnswer: "option One", possibleAnswer: "option Two", etc.],
      //  rightAnswer: "Correct answer"
      // }]
      questions: [], // one index, one question
      possibleAnswers: [], // four indexes, one question   (%4)
      rightAnswers: [], // one index, one question
      selectedAnswers: [], 
      modal: false,

    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    // the database stores the grade under /account/user ID/grades
    var dbRef = db.ref(
      "/account/" + localStorage.getItem("user") + "/quizzes/"
    );
    var quizListFromDB = [];
    await dbRef.once("value", quizzes => {
      // each quiz is listed under its name
      quizzes.forEach(quiz => {
        quizListFromDB.push({
          quizName: quiz.key
        });
      });
    });
    this.setState({ quizList: quizListFromDB });
  };
  submitQuiz = async () => {};
  // fetching works
  fetchQuizData = async quizName => {
    // alert("You have chosen to take " + quizName)
    // the database stores the grade under /account/user ID/grades
    var dbRef = db.ref(
      "/account/" + localStorage.getItem("user") + "/quizzes/" + quizName
    );
    this.setState({ QuizName: quizName })
    var questionsFromDB = [];
    await dbRef.once("value", quiz => {
      // fetch the questions in the quiz
      quiz.forEach(question => {
        // each question has multiple possible answers
        var multiChoice = [];
        var rightAnswer = "";
        question.forEach(possibleAnswers => {
          if (
            possibleAnswers.key !== "rightAnswer" &&
            possibleAnswers.val() !== ""
          ) {
            // push the database data into the questionfromdb array
            multiChoice.push({
              possibleAnswer: possibleAnswers.val()
            });
          } else {
            // store the right answer locally
            rightAnswer = possibleAnswers.val();
          }
        });
        questionsFromDB.push({
          question: question.key,
          possibleAnswers: multiChoice,
          rightAnswer: rightAnswer
        });
      });
    });

    console.log(questionsFromDB);
    // store questions in state
    this.setState({ questions: questionsFromDB });
    // alert(this.state.questions);

    // store rightAnswers in state
    let temp_2 = questionsFromDB.map((question, key) => {
      return JSON.stringify(question.rightAnswer);
    });
    this.setState({ rightAnswers: temp_2 });
    // alert(this.state.rightAnswers);

    // store possibleAnswers in state
    let temp_3 = questionsFromDB.map((question, key) => {
      return JSON.stringify(question.possibleAnswers);
    });
    this.setState({ possibleAnswers: temp_3 });
    // alert(this.state.possibleAnswers);
    this.toggle();
  };
  /*
    QuizModal() {
        var length = this.state.questions.length;

        return (
            this.state.questions.map((question) => {
                <div>
                    <form>
                        <label>
                            {question}
                        </label>
                        <input type="radio" value={question.optionOne} />{question.optionOne}<br></br>
                        <input type="radio" value={question.optionTwo} />{question.optionTwo}<br></br>
                        <input type="radio" value={question.optionThree} />{question.optionThree}<br></br>
                        <input type="radio" value={question.optionFour} />{question.optionFour}<br></br>
                    </form>
                </div>
            })
        )
    }
    */
  render() {
    return (
      <div className="app-size" align="center">
        <div className="shadow">
          {/* Prompt to choose a quiz */}
          <Form>
            <legend>Available Quizzes</legend>

            <Row align="center" margin={100}>
              {// Display the list of quizzes that the student can take
              this.state.quizList.map((val, idx) => {
                let quizID = `quiz-${idx}`;
                return (
                  <Col align="center" margin={100}>
                    <div key={idx}>
                      {/** Label of the question */}

                      <label htmlFor={quizID} className="questions-List">
                        <ListGroup className="question-Alignment">
                          <Button
                            onClick={() => {
                              this.fetchQuizData(
                                this.state.quizList[idx].quizName
                              );
                            }}
                            data-backdrop="static" data-keyboard="false"
                          >
                            {this.state.quizList[idx].quizName}
                          </Button>
                        </ListGroup>
                      </label>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Form>
        </div>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="modal"
          >
            <ModalHeader>{this.state.QuizName}</ModalHeader>
            <ModalBody>
              {this.state.questions.map(question => (
                <div>
                  {console.log(question.optionOne)}
                  <form>
                    <label>{question.question}</label>
                    <br />
                    {question.possibleAnswers.map(answer => 
                      <div>
                        <input type="radio" name="question" value={answer.possibleAnswer} />
                        {"      " + answer.possibleAnswer}
                      </div>
                    )}
                    <hr />
                  </form>
                </div>
              ))}
            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>{" "}
              <Button color="success" onClick={this.toggle}>
                Submit Quiz
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
