var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
}

var Home = React.createClass({
  render: function () {
    return (
      <div className="hero">
        <h1>Welcome Home! {this.props.loggedIn? "Logged In" : "Not Logged In"}</h1>
      </div>
    )
  }
})

module.exports = Home;
