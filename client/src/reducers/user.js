import {
    IS_LOADING, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILURE
} from '../constants';

const userFromStorage = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
const initialState = {
    user: userFromStorage || {},
    loggedIn: false,
    loggingIn: false
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                loggingIn: true
            };
        case USERS_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                loggingIn: false
            };
        case USERS_LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
