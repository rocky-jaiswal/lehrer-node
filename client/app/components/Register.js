var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
}

var Register = React.createClass({
  render: function () {
    return (
      <form>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="password" placeholder="password" /></label>
        <label><input ref="password" placeholder="confirm password" /></label>
        <button type="submit">Register</button>
      </form>
    )
  }
})

module.exports = Register;
