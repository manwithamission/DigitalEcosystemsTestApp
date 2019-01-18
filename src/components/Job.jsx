import React, { Component } from "react";
import { getJob } from '../actions.js';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';


class Job extends Component {

    constructor(props) {
        super(props);
        getJob(this.props.match.params.id);
    }

    render() { 
        return (
            <div className="job-page">
                <h1 className="job-page__title">
                    {this.props.job.title}
                </h1>
                <div className="job-page-wrapper">
                    
                    <div className="job-page__description">
                            { ReactHtmlParser(this.props.job.description) }
                    </div>

                    <div className="job-page__company-info">
                        <div className="company-name">
                            {this.props.job.company}
                        </div>
                        <img src={this.props.job.company_logo} alt=""/>
                    </div>
                    
                </div>
                   

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      jobs: state.jobs,
      fetching: state.fetching,
      error: state.error,
      isLoading: state.isLoading,
      job: state.job
    };
  };
  
export default connect(mapStateToProps, { getJob })(Job);