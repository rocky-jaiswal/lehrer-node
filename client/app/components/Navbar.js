var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
}

var Navbar = React.createClass({
  render: function () {
    return (
      <nav className="navbar">
        <p>Navbar {this.props.loggedIn? "Logged In" : "Not Logged In"}</p>
      </nav>
    )
  }
})

module.exports = Navbar;
