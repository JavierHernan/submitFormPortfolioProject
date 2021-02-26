import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pic from './Pic';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="both">
      <div className="app">
        <App />
      </div>
      <div className="pic">
        <Pic />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
