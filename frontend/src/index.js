import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListView from "./components/ListView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h1 className={'main-title'}>Todo List</h1>
      <ListView></ListView>

  </React.StrictMode>
);

reportWebVitals();
