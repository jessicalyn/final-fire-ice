import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
