import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../is-empty';

const initialState = {
    isAuthenticated: false,
    user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'email@email.com',
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.value),
                user: action.value
            }
        default:
            return state;
    }
}

export default authReducer;