import { REQUEST_JOBS, RECEIVE_JOBS, REQUEST_JOB, RECEIVE_JOB } from '../actions/actions.js';

const initialState = {
    jobs: [],
    fetching: false,
    fetched: false,
    error: null,
    isLoading: false,
    // notfound: false,
    job: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_JOBS:
            // console.log('JOBS: ', action.payload);
            return { ...state, fetching: action.payload , isLoading: true};
            
        case RECEIVE_JOBS:
            return {
                ...state,
                fetched: true,
                fetching: false,
                jobs: action.payload.page !== "0" ?  [...action.payload.data, ...state.jobs ] : action.payload.data,
                isLoading: false,
                // notfound: (action.payload.data).length === 0 ? true : false
            };

        case REQUEST_JOB:
            // console.log('JOBS: ', action.payload);
            return { ...state, fetching: action.payload , isLoading: true};
            
        case RECEIVE_JOB:
            return {
                ...state,
                fetched: true,
                fetching: false,
                job: action.payload.data,
                isLoading: false
            };
        
        default:
            return state;
    }
};