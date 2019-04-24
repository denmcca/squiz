import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const q_Style = {

};

const submitButton = {

};

export default class QuizzesPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1' ,
      info: [ 
                    { question: "Question 1 example", answer_1: "a1",  
                      answer_2: "a2", answer_3: "a3", answer_4: "a4" } ,
                    { question: "Question 2 example", answer_1: "a1",
                      answer_2: "a2", answer_3: "a3", answer_4: "a4" } ,
                    { question: "Question 3 example", answer_1: "a1",}

                 ]
    };
  }

    defaultTab() {
      this.state = {
        activeTab: '1'
      };
    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
         
        <Nav tabs>
          <NavItem>
            <p style={q_Style} >Questions:</p>
          </NavItem>
          {
          this.state.info.map( (info, index) => {
            return (
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === index })}
                  onClick={() => { this.toggle(index); }}
                >
                {index+1}
                </NavLink>
              </NavItem>
            );
          })
        }           
          <NavItem  className="ml-auto" navbarstyle={submitButton}>
            <Button outline color="success" size="md">Submit Quiz</Button>{' '}
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        {
          this.state.info.map( (info, index) => {
            return (
              <TabPane tabId={index} >
                {info.question} 
                {info.answer_1}
                {info.answer_2}
                {info.answer_3}
                {info.answer_4}
              </TabPane>
            );
          })
        }       
        </TabContent>

      </div>
    );
  }
}