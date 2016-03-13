var React = require('react');
var PropTypes = React.PropTypes;
var authentication = require('../services/authentication');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
}

var Logout = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    authentication.logout();
    this.context.router.replace('/');
  },

  render() {
    return (
      <section className="column is-offset-6 is-6">
        <p>You are now logged out. Click <Link to="/login">here</Link> to log back in.</p>
      </section>
    );
  }
})

module.exports = Logout;
