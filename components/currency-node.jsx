'use strict';

var React = require('react');
var CurrencySelect = require('./currency-select');
var CurrencyInput = require('./currency-input');

module.exports = React.createClass({

  handleValueChange: function(id, value) {
    this.props.currencyValueChange(id, value)
  },

  handleTypeChange: function(id, value) {
    this.props.currencyTypeChange(id, value)
  },

  render: function() {
    return (
      <div className="currency">
        {this.props.data.currencyType}
        <CurrencySelect currentType={this.props.data.currencyType} supportedCurrencies={this.props.supportedCurrencies} onChange={this.handleTypeChange}  id={this.props.data.key}/>
        <CurrencyInput currencyValue={this.props.data.currencyValue} id={this.props.data.key} onChange={this.handleValueChange} supportedCurrencies={this.props.supportedCurrencies}/>
      </div>
    );
  }
});
