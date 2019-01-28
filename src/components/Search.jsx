import React, { Component } from "react";
import { getJobs } from '../actions/actions.js';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            location: "",
            fulltime: false
        }
    }

    onChangeParams = e =>  {
        const { id, value } = e.currentTarget;
        this.setState({
            [id]: value
        })
    }

    onRequestJobs = () => {
        const fulltime = this.state.fulltime === true ? "on" : "off";
        getJobs(this.state.description, this.state.location, fulltime, "0");
    }

    render() {
        return (
            <div className="search-form">
                <div className="form-description">
                    <h3 className="form__title">Job description</h3>
                    <input id="description" onChange={this.onChangeParams} placeholder="Filter by title, benefits, companies, expertise" className="form__description">
                    </input>
                </div>
                <div className="form-location">
                    <h3 className="form__title">Location</h3>
                    <input id="location" onChange={this.onChangeParams} placeholder="Filter by city, state, zipcode or country" className="form__location">
                    </input>
                </div>
                <div className="fulltime-field">
                    <input id="fulltime" checked={this.state.fulltime} onChange={this.onChangeParams} type="checkbox"/>
                    Full Time Only
                </div>
                <div className="submit">
                    <button onClick={this.onRequestJobs}>Submit</button>
                </div>
            </div>  
        )
    }
}

export default Search;