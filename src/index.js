import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import css styles too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
