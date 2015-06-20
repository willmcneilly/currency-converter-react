'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    var self = this;
    var options = this.props.supportedCurrencies.map(function (currency) {
      return <option value={currency}>{currency}</option>;
    });

    return(
      <select value={this.props.currentType}>
        {options}
      </select>
    )
  }

});
