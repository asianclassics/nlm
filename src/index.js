import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import { fetchPages, fetchPosts, fetchData } from './actions'
import rootReducer from './reducers'

import Routes from './router'

import { checkConnection } from './server/connection'

import './assets/css/main.css'
import './assets/css/index.css'

// this is what gives the entire app access to t, i18n...
import './i18n'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// THIS COULD BE REPLACED WITH ONE 'INITIALIZE APP' type function
// GET PAGES, POSTS, ES DATA
store.dispatch(fetchPages())
store.dispatch(fetchPosts())
store.dispatch(fetchData())

checkConnection()

const App = () => {
    document.body.classList.add('landing');
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
