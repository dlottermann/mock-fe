import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Detail, FormSupermarket } from "./components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/new">
              <FormSupermarket />
            </Route>
            <Route exact path="/:id">
              <Detail />
            </Route>
            <Route exact path="/edt/:id">
              <FormSupermarket />
            </Route>
          </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

