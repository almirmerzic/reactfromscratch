import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import custom css
import './index.css';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Import component 
import App from './App.js';
// Import reducers
import reducer from './reducers/reducers'

// Create store
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();