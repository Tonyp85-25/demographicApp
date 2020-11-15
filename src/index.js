import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './assets/main.css';
import App from './components/app';
import reducers from './reducers';
import {fetchCountries, fetchRateExchange} from './actions/index'
import reportWebVitals from './reportWebVitals';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let myStore = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
myStore.dispatch(fetchCountries)
ReactDOM.render(
  <Provider
    store={myStore}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
