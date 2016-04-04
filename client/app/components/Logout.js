import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import authentication from '../services/authentication'

const styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
}

const Logout = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount () {
    authentication.logout();
    this.context.router.replace('/');
  },

  render () {
    return (
      <section className="column is-offset-6 is-6">
        <p>You are now logged out. Click <Link to="/login">here</Link> to log back in.</p>
      </section>
    );
  }
});

export default Logout
