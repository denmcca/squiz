import { LOGIN, LOGOUT, EMAIL_SET, PASSWORD_SET } from "../actions/types";

const initialState = { 
    isLoggedIn: false 
};

const loginReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        case EMAIL_SET:
            return {
                ...state,
                email: action.value,
            }
        case PASSWORD_SET:
            return {
                ...state,
                password: action.value,
            }
        default:
            return state;
    }
    // if (action.type === 'LOGIN')
    // {
    //     newState.isLoggedIn = true;
    // }
    // if (action.type === 'LOGOUT')
    // {
    //     newState.isLoggedIn = false;
    // }
    // if (action.type === 'EMAIL_SET')
    // {
    //     newState.email = action.value;
    // }
    // if (action.type === 'PASSWORD_SET')
    // {
    //     newState.password = "password_test";
    // }

    // return newState;
};

export default loginReducer;