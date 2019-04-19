const initialState = { 
    isLoggedIn: false 
};

const loginReducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'LOGIN')
    {
        newState.isLoggedIn = true;
    }
    if (action.type === 'LOGOUT')
    {
        newState.isLoggedIn = false;
    }

    return newState;
};

export default loginReducer;