import { UPDATE_EMAIL, UPDATE_PASSWORD, SET_USER, UNSET_USER }  from "../actions/types";

const initialState = {
    user: {
        firstName: 'Test',
        lastName: 'User', 
        email: '',
        // password: ''
    } 
};

const userReducer = (state = initialState, action) => {
    // const newState = {...state};
    switch(action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.value.email,
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.value,
            }
        case SET_USER:
            return {
                ...state,
                user: action.value,
            }
        case UNSET_USER:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
};

export default userReducer;