'use strict';

var React = require('react');

module.exports = React.createClass({
  handleChange: function(e) {
    var id = this.props.id
    this.props.onChange(id, event.target.value);
  },

  render: function() {
    return(
      <input type="text" value={this.props.currencyValue} placeholder="Input Value" onChange={this.handleChange}></input>
    )
  }
});
