import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from './hello-component.js';

(function main() {
  ReactDOM.render(<HelloComponent />, document.getElementById('app'));
})();
