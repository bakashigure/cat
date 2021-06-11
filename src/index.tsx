import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Content} from './App';
import test from './scroll'
import {Banner} from './Banner'
import reportWebVitals from './reportWebVitals';


test()

// React? 狗都不用!
ReactDOM.render(
    <Banner />,
    document.getElementById('banner')
);

ReactDOM.render(
    <Content />,
    document.getElementById('content')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
