import { UPDATE_EMAIL, UPDATE_PASSWORD }  from "../actions/types";

const initialState = { 
    email: '',
    password: '', 
};

const userReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.value,
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.value,
            }
        default:
            return state;
    }
};

export default userReducer;