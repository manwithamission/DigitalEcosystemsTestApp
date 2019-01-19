import { store } from "./index"

export const REQUEST_JOBS = 'REQUEST_JOBS'
function requestJobs() {
    return {
        type: REQUEST_JOBS,
        payload: true
    }
}

export const RECEIVE_JOBS  = 'RECEIVE_JOBS'
function receiveJobs(data) {
    return {
        type: RECEIVE_JOBS,
        payload: data,
    }
}

export const REQUEST_JOB = 'REQUEST_JOB'
function requestJob() {
    return {
        type: REQUEST_JOB,
        payload: true
    }
}

export const RECEIVE_JOB  = 'RECEIVE_JOB'
function receiveJob(data) {
    return {
        type: RECEIVE_JOB,
        payload: data,
    }
}

var status = (response) => {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}

var json = (response) => {
    return response.json();
}

export const getJobs = (description, location, fulltime, page) => {
    console.log(description, location, fulltime, page);
    const jobs = fetch(`https://cors.io/?https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=${description}&location=${location}&full_time=${fulltime}&page=${page}`
        // , { 
        //     mode: "cors",
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json"
        //     }   
        // }
    );
        store.dispatch(requestJobs());
        jobs
        .then(status)
        .then(json)
        .then( (data)  => {
            store.dispatch(receiveJobs({data: data, page: page}));
        })
};

export const getJob = (id) => {
    const jobs = fetch(`https://cors.io/?https://jobs.github.com/positions/${id}.json`
        // , { 
        //     mode: "cors",
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json"
        //     }   
        // }
    );
        store.dispatch(requestJob());
        jobs
        .then(status)
        .then(json)
        .then( (data)  => {
            store.dispatch(receiveJob({data: data }));
        })
};