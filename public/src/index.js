import React ,{ Component } from 'react';
import { Router, Route, IndexRoute , browserHistory , Redirect} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {render} from 'react-dom';
import  $ from 'jquery';
import 'bootstrap-loader';
import App from './component/app.jsx';
import Home from './component/home.jsx';

const history = createBrowserHistory();

render(
    <Router history={history}>
      <Route path="/" component={App}>
      <Route path="home" component={Home} />
      </Route>
    </Router>
  , document.getElementById('body'));