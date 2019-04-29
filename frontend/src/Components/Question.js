import React from 'react';
import {Form} from 'react'

export default class Question extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            selectedOption:'',
            possibleAnswers: this.props.question,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
    }

    handleFormSubmit = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();
      
        console.log('You have selected:', this.state.selectedOption);
    }

    render() {
        return (
            alert('possibleAnswers', this.props.question),
            <form onSubmit={this.handleFormSubmit}>
            {/* {this.state.possibleAnswers.map((possAns, idx) => {
                return (
                    <div className="radio" key={idx}>
                        <label>
                            <input type="radio" value={idx} 
                                            checked={this.state.selectedOption === {idx}} 
                                            onChange={this.handleOptionChange} />
                            {possAns}
                        </label>
                    </div>
                )
            })}
            
            {/* <div className="radio">
              <label>
                <input type="radio" value="option2" 
                              checked={this.state.selectedOption === 'option2'} 
                              onChange={this.handleOptionChange} />
                  {this.props.question.optionTwo}
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option3" 
                              checked={this.state.selectedOption === 'option3'} 
                              onChange={this.handleOptionChange} />
                    {this.props.question.optionThree}
              </label>
            </div> */}
            <button className="btn btn-default" type="submit">Save</button>
          </form>

        )
    }
}