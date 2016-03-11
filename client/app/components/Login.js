var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
}

var Login = React.createClass({
  render: function () {
    return (
      <form>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="pass" placeholder="password" /></label>
        <button type="submit">Login</button>
      </form>
    )
  }
})

module.exports = Login;
