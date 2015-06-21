'use strict';

var React = require('react');

module.exports = React.createClass({

  handleChange: function(e) {
    var id = this.props.id
    this.props.onChange(id, event.target.value);
  },

  render: function() {
    var self = this;
    var options = this.props.supportedCurrencies.map(function (currency) {
      return <option value={currency}>{currency}</option>;
    });

    return(
      <select value={this.props.currentType} onChange={this.handleChange}>
        {options}
      </select>
    )
  }

});
