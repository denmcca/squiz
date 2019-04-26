import { OPEN_DROPDOWN, CLOSE_DROPDOWN }  from "../actions/types";

const initialState = { 
    isDropDownOpen: false 
};

const navReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case OPEN_DROPDOWN:
            return {
                ...state,
                isDropDownOpen: true,
            }
        case CLOSE_DROPDOWN:
            return {
                ...state,
                isDropDownOpen: false,
            }
        default:
            return state;
    }
};

export default navReducer;