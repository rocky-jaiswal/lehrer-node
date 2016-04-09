import React from 'react'
import authentication from '../services/authentication'


const Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  checkIfCallback() {
    const authHash = this.props.lock.parseHash(window.location.hash)
    if (authHash) {
      if (authHash.id_token) {
        authentication.login(authHash.id_token)
        this.context.router.push({ pathname: '/home' })
      }
      if (authHash.error) {
        console.log("Error signing in", authHash)
      }
    }
  },

  componentDidMount() {
    if (this.props.loggedIn) {
      this.context.router.push({ pathname: '/home' })
    } else {
      this.checkIfCallback()
    }
  },

  render() {
    return (
      <section className="column is-offset-4 is-4">
        <h1 className="title">Welcome to Lehrer</h1>
      </section>
    )
  },
})

export default Login
