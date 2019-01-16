import React, { Component } from "react";

import Search from '../components/Search.jsx'
import Jobs from '../components/Jobs.jsx'

import '../sass/style.sass'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Digital Ecosystems Test App</h1>
                <Search />
                <Jobs />
            </div>

        );
    }
}

export default App;