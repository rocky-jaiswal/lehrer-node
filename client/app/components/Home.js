import React, { PropTypes } from 'react'
import greeting from '../services/greeting'

const styles = {
}

const Home = React.createClass({
  getInitialState () {
    return {
      message: ''
    }
  },

  componentDidMount () {
    const promise = greeting.fetch();
    promise.then(response => {this.setState({message: response.data.greeting})})
      .catch(err => {this.setState({message: 'An error occured!'})});
  },

  render () {
    return (
      <section className="column is-12">
        <div className="hero">
          <h1>{this.state.message}</h1>
        </div>
      </section>
    )
  }
});

export default Home
