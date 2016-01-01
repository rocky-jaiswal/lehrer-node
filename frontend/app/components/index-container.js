import React from 'react';
import { Link } from 'react-router';

export default class IndexContainer extends React.Component {
  componentDidMount() {
    console.log('in index');
  }

  render() {
    return(
      <div>
        <h1>Index</h1>
        <Link to="/about">About</Link><br/>
        <Link to="/pages">Pages</Link>
      </div>
    );

  }
}
