import { SUBMIT_QUESTION, REMOVE_QUESTION } from "../actions/types";

const initialState = { 
    questions: [
        {
          question: "Seven properties associated with life",
          optionOne: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption.",
          optionTwo: "Donec rutrum placerat gravida.",
          optionThree: "Quisque iaculis tellus eget.",
          optionFour: "Fusce blandit justo sit.",
          rightAnswer: "order, reproduction, growth and development, energy processing, response to the environment, regulation, evloutionary adaption."
        }
    ]
};

const quizReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case SUBMIT_QUESTION:
            return {
                ...state, 
                // code here
            }
        case REMOVE_QUESTION:
            return {
                ...state, 
                // code here

            }
        default:
            return state;
    }
};

export default quizReducer;