import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div className="search-form">
                <div className="form">
                    <h3 className="form__title">Job description</h3>
                    <input placeholder="Filter by title, benefits, companies, expertise" className="form__description">
                    </input>
                </div>
                <div className="form">
                    <h3 className="form__title">Location</h3>
                    <input placeholder="Filter by city, state, zipcode or country" className="form__location">
                    </input>
                </div>
                <div className="fulltime-field">
                    <input type="checkbox"/>
                    Full Time Only
                </div>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>  
        )
    }
}

export default Search;