import {
    APP_BASE_URL, IS_LOADING, USERS_LOGIN_SUCCESS,
    USERS_LOGIN_FAILURE
} from '../constants';
import axios from 'axios';

export const isLoading = () => {
    return {
        type: IS_LOADING,
        payload: null
    }
}

export const loginSuccess = (user) => {
    return {
        type: USERS_LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = (errorMsg) => {
    return {
        type: USERS_LOGIN_FAILURE,
        payload: errorMsg
    }
}
    
export const login = (username, password, rememberMe) => async (dispatch) => {
    try {
        dispatch(isLoading());
        await axios.post(`${APP_BASE_URL}users/authenticate`, { username, password })
        .then(response => {
            if (response.data) {
                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                } else {
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                }
                dispatch(loginSuccess(response.data));
            }
        })
        .catch((error) => {
            dispatch(loginFailure(error.response.data.message));
        });
    } catch(error) {
        dispatch(loginFailure(error));
    }
}
