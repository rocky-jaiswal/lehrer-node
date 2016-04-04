import React, { PropTypes } from 'react'
import { Link } from 'react-router'

var styles = {
  head: {
    backgroundColor: "#ecf0f1",
    height: "75px",
    padding: "10px"
  },
  heading: {
    color: "#34495e"

  }
};

const Navbar = React.createClass({

  notLoggedIn () {
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

  loggedIn () {
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

  render () {
    return (
      <nav className="navbar" style={styles.head}>
        <span className="navbar-item is-text-centered">
          <h1 className="title"><Link to="/" style={styles.heading}>Lehrer</Link></h1>
        </span>
        {this.props.loggedIn? this.loggedIn() : this.notLoggedIn()}
      </nav>
    );
  }

})

export default Navbar
