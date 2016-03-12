var React = require('react');
var Navbar = require('../components/Navbar');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var AppContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      loggedIn: false
    }
  },

  render () {
    return (
      <div className="container">
        <Navbar loggedIn={this.state.loggedIn}/>
        {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}
      </div>
    )
  }
})

module.exports = AppContainer;
