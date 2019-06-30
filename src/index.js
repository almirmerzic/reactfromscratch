import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import custom css
import './index.css';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Import component 
import App from './App.js';
// Import reducers
import todoapp from './reducers/reducers'

// Create store
var store = createStore(todoapp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


import * as serviceWorker from './serviceWorker';
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
       <App />
    </Provider>,
     
    rootElement
 )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();