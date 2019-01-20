import React, { Component } from "react";
import { getJob } from '../actions.js';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom"


class Job extends Component {

    constructor(props) {
        super(props);
        getJob(this.props.match.params.id);
    }

    render() { 
        let {title, type, description, company, company_logo, company_url, how_to_apply} = this.props.job;
        return (
            <div className="job-page">
                <Link to={"/"} >
                    <h1 className="back-button">
                       Back to all jobs
                    </h1>
                </Link>
                <div className="job-page-title">
                    {title}, {type}
                </div>
                <div className="job-page-wrapper">
                    
                    <div className="job-page-info">
                        <div className="job-page-desription">
                            { ReactHtmlParser(description) }
                        </div>
                        
                        <div className="job-page-company-info">
                            <div className="company-name">
                                {company}
                            </div>
                            <img src={company_logo} alt=""/>
                            <div className="job-page-company-link">
                                <a href={company_url}>{company_url}</a>
                            </div> 
                            <div className="job-page-how-to-apply">
                                <h3>How to apply</h3>
                                
                                {ReactHtmlParser(how_to_apply)}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                {
                    this.props.isLoading ? <img style={{ marginLeft: "calc(50vw - 128px)" }} src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" alt="" /> : ""
                }

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