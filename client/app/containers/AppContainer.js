import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../actions'

import Navbar from '../components/Navbar'

const styles = {
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (token) => {
      dispatch(login(token))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

const AppContainer = React.createClass({
  render() {
    return (
      <div className="container is-fluid">
        <Navbar loggedIn={this.props.session.loggedIn} authLock={this.props.session.authLock}/>
        <div className="columns">
          {React.cloneElement(this.props.children, { loggedIn: this.props.session.loggedIn,
                                                     authLock: this.props.session.authLock,
                                                     login: this.props.login,
                                                     logout: this.props.logout })}
        </div>
      </div>
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
