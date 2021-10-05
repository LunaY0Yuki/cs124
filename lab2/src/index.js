import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InMemoryApp from './InMemoryApp.js';
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
        item_name: "Text John about bank statements hello ehleo heloo ehloe heoehleooo dasfhdsakfhasjkhfdajskdhffasdhfkjsadhfkasdjfslfdjksaddkdfj ",
        completed: false
    },
    {
        id: 5,
        item_name: "Eat Lunch 2",
        completed: false
    },
    {
        id: 6,
        item_name: "Eat Lunch 3",
        completed: false
    },
    {
        id: 7,
        item_name: "Eat Lunch 4",
        completed: false
    },
    {
        id: 8,
        item_name: "Eat Lunch 5",
        completed: false
    },
    {
        id: 9,
        item_name: "Eat Lunch 6",
        completed: false
    },
    {
        id: 10,
        item_name: "Eat Lunch 7",
        completed: false
    },
    {
        id: 11,
        item_name: "Eat Lunch 8",
        completed: false
    },
    {
        id: 12,
        item_name: "Eat Lunch 9",
        completed: false
    },
    {
        id: 13,
        item_name: "Eat Lunch 10",
        completed: false
    },
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
