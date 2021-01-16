import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Variabel from './react-dasar/Variabel';
// import StateProps from './StateProps';
// import Map from './Map';
// import Lifecycle from './react-dasar/Lifecycle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'


ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
