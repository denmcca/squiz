import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Question from './Question';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 0,
            selectedOption: 1
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleChange = () => {

    }

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
      
        console.log('You have selected:', this.state.selectedOption);
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    {this.props.questions.map((q, idx) => {
                        return (
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === idx })}
                                onClick={() => { this.toggle(idx); }}
                            >
                                {idx + 1}
                            </NavLink>
                        </NavItem>
                        )                     
                    })}
                </Nav>

                {this.props.questions.map((q, idx) => {
                    return (
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId={idx}>
                                <Row>
                                    <Col sm="12">
                                        <div key={idx} className='shadow'>
                                            <h4>{q.question}</h4>
                                            <form onSubmit={this.handleFormSubmit}>
                                            <div>
                                            {q.possibleAnswers.map((p, idx2) => {
                                                return (
                                                    <div className="radio" key={idx2}>
                                                        <label key={idx2}>
                                                            <input type="radio" value={idx2} 
                                                                            checked={this.state.selectedOption === idx2} 
                                                                            onChange={(e) => {
                                                                                this.setState({
                                                                                    selectedOption: e.target.value
                                                                                  });
                                                                            }} />
                                                            {idx2} . 
                                                            {this.state.selectedOption}
                                                            {p.possibleAnswer}
                                                        </label>
                                                    </div>
                                                )})}
                                                </div>
                                                <button className="btn btn-default" type="submit">Save</button>
                                            </form>                                                
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>    
                    )
                })}
            </div >
        );
    }
}
