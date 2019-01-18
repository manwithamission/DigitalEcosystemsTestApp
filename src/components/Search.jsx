import React, { Component } from "react";
import { getJobs } from '../actions.js';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            location: "",
            fulltime: "off"
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
        // console.log(this.state.location);
    }

    ChangeFulltimeStatus() {
        this.setState({
            fulltime: !this.state.fulltime
        })
        // console.log(this.state.fulltime);
    }

    OnRequestJobs() {
        // console.log('dsadsadasda', this.state);
        getJobs(this.state.description, this.state.location, this.state.fulltime, "0");
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