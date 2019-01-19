import React, { Component } from "react";
import { getJobs } from '../actions.js';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            location: "",
            fulltime: false
        }
    }

    ChangeDescription(e) {
        this.setState({
            description: e.currentTarget.value
        })
        console.log(this.state.description);
    }

    ChangeLocation(e) {
        this.setState({
            location: e.currentTarget.value
        })
    }

    ChangeFulltimeStatus(e) {
        this.setState({
            fulltime: e.currentTarget.checked
        })
    }

    OnRequestJobs() {
        let fulltime = this.state.fulltime === true ? "on" : "off";
        getJobs(this.state.description, this.state.location, fulltime, "0");
    }

    render() {
        return (
            <div className="search-form">
                <div className="form">
                    <h3 className="form__title">Job description</h3>
                    <input onChange={this.ChangeDescription.bind(this)} placeholder="Filter by title, benefits, companies, expertise" className="form__description">
                    </input>
                </div>
                <div className="form">
                    <h3 className="form__title">Location</h3>
                    <input onChange={this.ChangeLocation.bind(this)} placeholder="Filter by city, state, zipcode or country" className="form__location">
                    </input>
                </div>
                <div className="fulltime-field">
                    <input checked={this.state.fulltime} onChange={this.ChangeFulltimeStatus.bind(this)} type="checkbox"/>
                    Full Time Only
                </div>
                <div className="submit">
                    <button onClick={this.OnRequestJobs.bind(this)}>Submit</button>
                </div>
            </div>  
        )
    }
}

export default Search;