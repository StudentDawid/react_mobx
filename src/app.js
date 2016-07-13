import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import AppState from './stores/AppState';

const appState = new AppState();
const app = document.getElementById('app');

ReactDOM.render(
  <MainPage appState={appState} />
  ,
  app
);
