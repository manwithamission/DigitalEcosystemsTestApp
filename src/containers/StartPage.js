import React, { Component } from "react";

import Search from '../components/Search.jsx'
import Jobs from '../components/JobsList.jsx'

import { connect } from 'react-redux';
import { getJobs } from '../actions.js';

import '../sass/style.sass'

class StartPage extends Component {

    render() {
        const { notfound, isLoading, jobs } = this.props;
        console.log(this.props);
        return (
            <div className="wrapper">
                <h1 className="title">Digital Ecosystems Test App</h1>
                
                <Search /> 
                <Jobs notfound={notfound} isLoading={isLoading} jobs={jobs}/>
                
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        notfound: state.notfound,
        isLoading: state.isLoading
    };
};
  
export default connect(mapStateToProps, { getJobs })(StartPage);