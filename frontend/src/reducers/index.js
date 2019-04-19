import errorReducer from './errorReducer';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import quizReducer from './quizReducer';

export default combineReducers(
    {
        errors: errorReducer,
        auth: authReducer,
        login: loginReducer,
        quizzes: quizReducer
    }
);

export default combineReducers;