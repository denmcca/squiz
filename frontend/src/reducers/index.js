import errorReducer from './errorReducer';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import quizReducer from './quizReducer';
import navReducer from './navReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers(
    {
        rErrors:errorReducer,
        rAuth:authReducer,
        rLogin:loginReducer,
        rQuiz:quizReducer,
        rNav:navReducer,
        rUser:userReducer
    }
);

export default rootReducers;