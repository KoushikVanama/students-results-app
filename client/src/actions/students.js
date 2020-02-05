import { GET_ALL_SUBJECTS, APP_BASE_URL, SAVE_SUBJECT, SAVE_FILTERED_RESULTS,
    GET_QUERIED_RESULTS, GET_QUERIES, POST_QUERIES_SUCCESS, POST_QUERIES_FAILURE
} from '../constants';

import axios from 'axios';

export const getAllSubjects = obj => ({
    type: GET_ALL_SUBJECTS,
    payload: obj
});

export const getSubjects = () => async (dispatch) => {
    try{
        await axios.get(`${APP_BASE_URL}subjects`)
        .then((response) => {
            dispatch(getAllSubjects(response.data));
        })
    } catch(error) {
        console.log(error);
    }
}

export const saveSubject = (option) => ({
    type: SAVE_SUBJECT,
    payload: option
});

export const saveFitleredResults = (operation, marks) => ({
    type: SAVE_FILTERED_RESULTS,
    payload: { operation, marks }
});

export const getSearchResults = data => ({
    type: GET_QUERIED_RESULTS,
    payload: data
});

export const getResults = (subject, operation, marks) => async (dispatch) => {
    try{
        await axios.get(`${APP_BASE_URL}results?subject=${subject.value}&operation=${operation.value}&marks=${marks}`)
        .then((response) => {
            dispatch(getSearchResults(response.data))
        })
    } catch(error) {
        console.log(error);
    }
}

export const getQueries = data => ({
    type: GET_QUERIES,
    payload: data
});

export const getQueriedResults = () => async (dispatch) => {
    try {
        await axios.get(`${APP_BASE_URL}results/queries`)
        .then((response) => {
            dispatch(getQueries(response.data))
        })
    } catch(error) {
        console.log(error);
    }
}

export const postQueriesSuccess = obj => ({
    type: POST_QUERIES_SUCCESS,
    payload: obj
});

export const postQueriesFailure = () => ({
    type: POST_QUERIES_FAILURE,
    payload: null
});

export const postQuery = (subject, operation, marks) => async (dispatch) => {
    try {
        var obj = {
            "subject": subject.value,
            "operation": operation.value,
            "marks": parseInt(marks)
        };
        await axios.post(`${APP_BASE_URL}results/query`, obj)
        .then((response) => {
            dispatch(postQueriesSuccess(response.data))
        })
        .catch((error) => {
            dispatch(postQueriesFailure(error));
        });
    } catch(error) {
        dispatch(postQueriesFailure(error));
    }
}
