import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'mobx-react';
import AppState from './stores/AppState';

import MainPage from './pages/MainPage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const app = document.getElementById('app');
const appState = new AppState();

ReactDOM.render(
  <Provider appState={appState}>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <IndexRoute component={FirstPage} />
        <Route path="secondpage" name="secondpage" component={SecondPage} />
      </Route>
    </Router>
  </Provider>
  ,
  app
);
