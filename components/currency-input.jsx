'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <input type="text" value={this.props.currencyValue} placeholder="Input Value"></input>
    )
  }
});
