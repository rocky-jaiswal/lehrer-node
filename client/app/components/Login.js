import React from 'react'

const Login = React.createClass({

  checkIfCallback(authLock) {
    const authHash = authLock.parseHash(window.location.hash)
    if (authHash) {
      if (authHash.id_token) {
        this.props.login(authHash.id_token)
      }
      if (authHash.error) {
        console.error("Error signing in", authHash)
      }
    }
  },

  componentWillUpdate(newProps) {
    //console.log(newProps)
    if(newProps.loggedIn) {
      this.props.goto('/home')
    }
  },

  componentWillMount() {
    //console.log(this.props)
    if (this.props.loggedIn) {
      this.props.goto('/home')
    } else {
      this.checkIfCallback(this.props.authLock)
    }
  },

  render() {
    return (
      <section className="column">
        <h1 className="title">Welcome to Lehrer</h1>
      </section>
    )
  },
})

export default Login
