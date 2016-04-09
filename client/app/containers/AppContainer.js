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

  getInitialState() {
    return {
      loggedIn: false
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    this.lock = new Auth0Lock('KvvSjBA18edefOpruILVTTeXMcbHaRFV', 'rockyj.eu.auth0.com')
    this.subscription = eventManager.getEmitter().addListener(eventManager.authChannel, this.updateAuth)
    if(authentication.isAuthenticated()) {
      this.setState({loggedIn: true})
      this.context.router.push({ pathname: '/home' })
    } else {
      this.setState({loggedIn: false})
    }
  },

  componentWillUnmount() {
    this.subscription.remove()
  },

  render() {
    return (
      <div className="container is-fluid">
        <Navbar loggedIn={this.state.loggedIn} lock={this.lock}/>
        <div className="columns">
          {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn, lock: this.lock })}
        </div>
      </div>
    )
  }
});

export default AppContainer
