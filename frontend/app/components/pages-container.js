import React from 'react';
import { Link } from 'react-router';

export default class PagesContainer extends React.Component {
  render() {
    return(
      <div>
        <h1>Pages</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
