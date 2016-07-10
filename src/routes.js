import React,{Component} from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';


export default (
  <Route path = "/" component={App}>
    <IndexRoute component = {HomePage} />
    <Route path="courses" component={CoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
