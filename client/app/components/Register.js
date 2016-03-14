var React = require('react');
var PropTypes = React.PropTypes;
var authentication = require('../services/authentication');

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
}

var Register = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      error: false,
      errorMsg: '',
    }
  },

  onSubmitRegister(event) {
    event.preventDefault();

    const email = this.refs.email.value;
    const pass = this.refs.password.value;
    const confirmPassword = this.refs.confirmPassword.value;

    if(pass.length < 5 || pass !== confirmPassword) {
      this.setState({
        error: true,
        errorMsg: 'Password is too short or does not match'
      })
    } else {
      authentication.register(email, pass, confirmPassword, (loggedIn) => {
        if (loggedIn)
          this.context.router.push({pathname: '/'});
        else
          return this.setState({ error: true });
      });
    }
  },

  render() {
    return (
      <section className="column is-offset-6 is-4">
        <h1 className="title">Register</h1>
        <form onSubmit={this.onSubmitRegister}>
          <p className="control">
            <input className="input" type="email" placeholder="Email" ref="email"/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Password" ref="password"/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Confirm Password" ref="confirmPassword"/>
          </p>
          <p className="control">
            <button className="button is-primary">
              Register
            </button>
          </p>
        </form>
        {this.state.error && (
            <p style={styles.error}>{this.state.errorMsg}</p>
        )}
      </section>
    )
  }
})

module.exports = Register;
