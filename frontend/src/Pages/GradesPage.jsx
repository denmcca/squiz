import React, { Component } from 'react';
import reactstrap, { Table } from 'reactstrap';

export default class GradesPage extends Component {
  render() {
    return(
        <div style={{ width: "60%", margin: "0 auto"}}>
            <Table>
                <thead>
                    <th>Quizzes</th>
                    <th>Score</th>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    )
  }
}