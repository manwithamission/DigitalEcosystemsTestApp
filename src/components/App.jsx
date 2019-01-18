import React, { Component } from "react";

import StartPage from "../containers/StartPage"
import Job from "./Job.jsx"

import { Switch, Route } from 'react-router-dom'

import '../sass/style.sass'

class App extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path='/' component={StartPage}/>
                    <Route path='/job/:id' component={Job}/>
                </Switch>
                
        );
    }
}
  
export default App