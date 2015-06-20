'use strict';

var React = require('react');
var CurrencySelect = require('./currency-select');
var CurrencyInput = require('./currency-input');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="currency">
        <CurrencySelect/>
        <CurrencyInput/>
      </div>
    );
  }
});
