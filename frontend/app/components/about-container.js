import React from 'react';
import { Link } from 'react-router';

export default class AboutContainer extends React.Component {
  componentDidMount() {
    console.log('in about');
  }

  render() {
    return(
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
