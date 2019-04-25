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
import { db } from '../firebase'
export default class QuizTakingPage extends Component {
    constructor() {
        super();
        // the state stores the list of questions 
        this.state = {
            quizList: [
            ]
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        // the database stores the grade under /account/user ID/grades
        var dbRef = db.ref("/account/" + localStorage.getItem('user') + "/quizzes/")
        var quizListFromDB = []
        await dbRef.once("value", quizzes => {
            // each quiz is listed under its name
            quizzes.forEach(quiz => {
                quizListFromDB.push({
                    quizName: quiz.key
                })
            })
        })
        this.setState({ quizList: quizListFromDB })
    }
    submitQuiz = async () => {

    }
    // fetching works
    fetchQuizData = async (quizName) => {
        alert("You have chosen to take " + quizName)
        // the database stores the grade under /account/user ID/grades
        var dbRef = db.ref("/account/" + localStorage.getItem('user') + "/quizzes/" + quizName)
        var questionsFromDB = []
        await dbRef.once("value", quiz => {
            // fetch the questions in the quiz
            quiz.forEach(question => {
                // each question has multiple possible answers
                var multiChoice = []
                var rightAnswer = ""
                question.forEach(possibleAnswers => {
                    if (possibleAnswers.key !== 'rightAnswer' && possibleAnswers.val() !== "") {
                        
                        // push the database data into the questionfromdb array
                        multiChoice.push({
                            possibleAnswer: possibleAnswers.val()
                        })
                    }else{
                        // store the right answer locally
                        rightAnswer = possibleAnswers.val()
                    }
                })
                questionsFromDB.push({
                    question: question.key,
                    possibleAnswers: multiChoice,
                    rightAnswer: rightAnswer
                })
            })
        })
        // print the questions from db array
        alert(JSON.stringify(questionsFromDB))
        // this.setState({ quizList: quizListFromDB })
    }
    render() {
        return (
            <div className="app-size" align='center'>
                <div className='shadow'>
                    {/* Prompt to choose a quiz */}
                    <Form >
                        <legend> Take A Quiz </legend>
                        <br />
                        <Row align='center' margin={100}>
                            {
                                // Display the list of quizzes that the student can take
                                this.state.quizList.map((val, idx) => {
                                    let quizID = `quiz-${idx}`
                                    return (
                                        <Col align='center' margin={100}>
                                            <div key={idx}>
                                                {/** Label of the question */}

                                                <label htmlFor={quizID} className="questions-List">
                                                    <ListGroup className="question-Alignment">
                                                        <Button onClick={() => { this.fetchQuizData(this.state.quizList[idx].quizName); }}>{
                                                            this.state.quizList[idx].quizName
                                                        }</Button>
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
