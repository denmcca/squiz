import { LOGIN, LOGOUT } from "../actions/types";

const initialState = { 
    isLoggedIn: false 
};

const loginReducer = (state = initialState, action) => {
    console.log('loginReducer: ' + state.isLoggedIn);
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
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