import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// console.log(store.getState());

ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);