import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Components/Router'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
// import {store} from './store/store'

const store = createStore(rootReducers);
const customHistory = createBrowserHistory();

ReactDOM.render(
    // <div className='center'>
    <Provider store = {store}>
        <Router history={customHistory}/>
    </Provider>, document.getElementById('root')
    // </div>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
