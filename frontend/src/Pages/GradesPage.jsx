import React, { Component } from 'react';
import reactstrap, { Table } from 'reactstrap';

export default class GradesPage extends Component {  
  constructor() {
    super();
    this.state = {
      info: [ {quizName: "test_quiz_1", quizGrade: "18/20"},
              {quizName: "test_quiz_2", quizGrade: "17/20"},
              {quizName: "test_quiz_3", quizGrade: "20/20"},
              {quizName: "test_quiz_4", quizGrade: "15/30"},
              {quizName: "test_quiz_5", quizGrade: "22/25"},
            ]
    }
  }

  render() {
    return(
        <div style={{ width: "55%", margin: "0 auto"}}>
            <Table>
                <thead>
                  <tr>
                    <th id="quizName">Quizzes</th>
                    <th id="quizGrade">Score</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.info.map( (info, index) => {
                    return (
                      <tr>
                        <td id="quizName">{info.quizName}</td>
                        <td id="quizGrade">{info.quizGrade}</td>
                      </tr>
                    );
                  })
                }                
                </tbody>
            </Table>
        </div>
    )
  }
}

