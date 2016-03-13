var React = require('react');
var Navbar = require('../components/Navbar');
var authentication = require('../services/authentication');

var styles = {
}

var AppContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      loggedIn: false
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentDidMount () {
    authentication.onChange = this.updateAuth;
    const promise = authentication.isAuthenticated();
    promise.then(resp => {this.setState({loggedIn: true})})
      .catch(err => {this.setState({loggedIn: false})});
  },

  render () {
    return (
      <div className="container is-fluid">
        <Navbar loggedIn={this.state.loggedIn}/>
        <div className="columns">
          {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}
        </div>
      </div>
    )
  }
})

module.exports = AppContainer;
