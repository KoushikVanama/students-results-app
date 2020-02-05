import { GET_ALL_SUBJECTS, SAVE_SUBJECT, SAVE_FILTERED_RESULTS, 
    GET_QUERIED_RESULTS, GET_QUERIES, POST_QUERIES_FAILURE, POST_QUERIES_SUCCESS
} from '../constants';

const initialState = {
    subjects: [],
    chosenSubject: null,
    chosenOperation: null,
    chosenMarks: null
};

export const students = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case GET_ALL_SUBJECTS:
            let subjectsArr = action.payload.split(',');
            subjectsArr = subjectsArr.map(item => {
                var obj = {};
                obj["value"] = item;
                obj["label"] = item;
                return obj;
            });
            return { ...state, subjects: subjectsArr };
        case SAVE_SUBJECT:
            return { ...state, chosenSubject: action.payload };
        case SAVE_FILTERED_RESULTS:
            return { ...state, chosenOperation: action.payload.operation, chosenMarks: action.payload.marks };
        case GET_QUERIED_RESULTS:
            return { ...state, results: action.payload };
        case GET_QUERIES:
            return { ...state, queries: action.payload };
        case POST_QUERIES_SUCCESS:
            return { ...state };
        case POST_QUERIES_FAILURE:
            return { ...state };
        default:
            return { ...state };
    }
}
