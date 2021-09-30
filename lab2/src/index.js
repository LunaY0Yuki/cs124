import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from './App.js';
import reportWebVitals from './reportWebVitals.js';

let initialData = [
    {
        id: 1,
        item_name: "Buy new John Grisham book",
        completed: true
    },
    {
        id: 2,
        item_name: "Eat Lunch",
        completed: false
    },
    {
        id: 3,
        item_name: "Call Mom",
        completed: true
    },
    {
        id: 4,
        item_name: "Text John about bank statements hello ehleo heloo ehloe heoehleooo ",
        completed: false
    }
];

// let initialData = [];

ReactDOM.render(
  <React.StrictMode>
    <InMemoryApp initialData={initialData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
