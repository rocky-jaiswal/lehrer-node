var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
}

var Register = React.createClass({
  render: function () {
    return (
      <section className="column is-offset-6 is-4">
        <form>
          <p className="control">
            <input className="input" type="email" placeholder="Email"/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Password"/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Confirm Password"/>
          </p>
          <p className="control">
            <button className="button is-primary">
              Register
            </button>
          </p>
        </form>
      </section>
    )
  }
})

module.exports = Register;
