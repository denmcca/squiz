import errorReducer from './errorReducer';
import loginReducer from './loginReducer';

const initialState = { 
    isLoggedIn: false ,
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

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'LOGIN')
    {
        newState.isLoggedIn = true;
        // let user = action.value;
        // newState.email = user.email;
        // newState.password = user.password;
    }
    if (action.type === 'LOGOUT')
    {
        newState.isLoggedIn = false;
    }
    if (action.type === 'OPEN_DROPDOWN')
    {
        newState.isDropDownOpen = true;
    }
    if (action.type === 'EMAIL_SET')
    {
        newState.email = action.value;
    }
    if (action.type === 'PASSWORD_SET')
    {
        newState.password = "password_test";
    }
    if (action.type === 'SET_QUESTION')
    {
        newState.questions = action.value;
    }

    return newState;
};

export default reducer;