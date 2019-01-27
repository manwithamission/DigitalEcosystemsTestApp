import React, { Component } from "react";
import { getJobs } from '../actions.js';

import { Link } from "react-router-dom"

class Jobs extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    constructor(props) {
        super(props);
        this.state = {
            scrollposition: 4650 + 100 - window.innerHeight - 200,
            page: 1
        }
    }

    onScroll = () => {
        // console.log(window.scrollY, window.innerHeight, this.state.scrollposition);
        if (window.scrollY > this.state.scrollposition) {
            getJobs("", "", "", this.state.page);
            this.setState({
                scrollposition: this.state.scrollposition + 4500,
                page: this.state.page + 1
            })
        }
    }

    render() {
        return (
            <div className="job-list">
                <h1 className="job-list__title">Showing {(this.props.jobs).length} jobs</h1>
                {
                    this.props.jobs.map(job => {
                        return <Link key={job.id} to={"/job/" + job.id}>
                            <div className="job">
                                <h1 className="job__title">{job.title}</h1>
                                <div className="job-info">
                                    <p className="job__company">{job.company} —  </p>
                                    <p className="job__fulltime">{job.type}</p>
                                    <p className="job__location">{job.location}</p>
                                </div>
                            </div>
                        </Link>
                    })
                }
                {
                    this.props.isLoading ? <img style={{ marginLeft: "calc(50vw - 128px)" }} src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" alt="" /> : ""
                }
                {
                    this.props.notfound === true ? <p className="result-title"> Not found </p> : ""
                }

            </div>
        )
    }
}

export default Jobs;