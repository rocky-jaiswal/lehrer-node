var React = require('react');
var Home = require('../components/Home');
var Login = require('../components/Login');

var MainContainer = React.createClass({
  render: function () {
    var comp;
    if (this.props.loggedIn) {
      comp = <Home loggedIn={true} />;
    } else {
      comp = <Login />;
    }
    return(
      <div>{comp}</div>
    );
  }
});

module.exports = MainContainer;
