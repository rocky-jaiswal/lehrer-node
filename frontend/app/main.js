import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import IndexContainer from './components/index-container';
import AboutContainer from './components/about-container';
import PagesContainer from './components/pages-container';

(function main() {
  ReactDOM.render((
    <Router>
      <Route path="/" component={IndexContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/pages" component={PagesContainer} />
    </Router>),
    document.getElementById('app')
  );
})();
