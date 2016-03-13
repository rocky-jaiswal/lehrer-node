var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
  head: {
    backgroundColor: "#ecf0f1",
    height: "75px",
    padding: "10px"
  }
}

var Navbar = React.createClass({
  notLoggedIn: function () {
    return(
      <div className="navbar-right">
        <span className="navbar-item">
          <Link to="/login">Login</Link>
        </span>
        <span className="navbar-item">
          <Link to="/register">Register</Link>
        </span>
      </div>
    );
  },

  loggedIn: function () {
    return(
      <div className="navbar-right">
        <span className="navbar-item">
          <Link to="/">Home</Link>
        </span>
        <span className="navbar-item">
          <Link to="/settings">Settings</Link>
        </span>
        <span className="navbar-item">
          <Link to="/logout">Logout</Link>
        </span>
      </div>
    );
  },

  render: function () {
    return (
      <nav className="navbar" style={styles.head}>
        <span className="navbar-item is-text-centered">
          <h1 className="title">Lehrer</h1>
        </span>
        {this.props.loggedIn? this.loggedIn() : this.notLoggedIn()}
      </nav>
    );
  }
})

module.exports = Navbar;
