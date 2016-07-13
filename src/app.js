import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import AppState from './observable/AppState';

const appState = new AppState();
const app = document.getElementById('app');

console.log('app.js');
console.log(appState);
ReactDOM.render(
  <MainPage appState={appState} />
  ,
  app
);
