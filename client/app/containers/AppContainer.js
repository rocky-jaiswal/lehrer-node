import React from 'react'
import Navbar from '../components/Navbar'
import authentication from '../services/authentication'
import eventManager from '../services/event_manager'

const styles = {
}

const AppContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      loggedIn: false
    }
  },

  updateAuth (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentDidMount () {
    this.subscription = eventManager.getEmitter().addListener(eventManager.authChannel, this.updateAuth);
    const promise = authentication.isAuthenticated();
    promise.then(resp => {this.setState({loggedIn: true})})
      .catch(err => {this.setState({loggedIn: false})});
  },

  componentWillUnmount () {
    this.subscription.remove();
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
});

export default AppContainer
