var React = require('react');
var PropTypes = React.PropTypes;
var greeting = require('../services/greeting');

var styles = {
}

var Home = React.createClass({
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

  render: function () {
    return (
      <section className="column is-12">
        <div className="hero">
          <h1>{this.state.message}</h1>
        </div>
      </section>
    )
  }
})

module.exports = Home;
