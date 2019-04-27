import { SET_EMAIL, SET_PASSWORD, SET_FNAME, SET_LNAME, SET_USER }  from "../actions/types";

const initialState = {
    firstName: 'Test',
    lastName: 'User', 
    email: '',
    password: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.value,
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.value,
            }
        case SET_USER:
            return {
                ...state,
                firstName: action.value.firstName,
                lastName: action.value.lastName,
                email: action.value.email,
            }
        case SET_FNAME:
            return {
                ...state,
                firstName: action.value,
            }
        case SET_LNAME:
            return {
                ...state,
                lastName: action.value,
            }
        default:
            return state;
    }
};

export default userReducer;