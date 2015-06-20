'use strict';

var React = require('react');
var CurrencySelect = require('./currency-select');
var CurrencyInput = require('./currency-input');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="currency">
        {this.props.data.currencyType}
        <CurrencySelect currentType={this.props.data.currencyType} supportedCurrencies={this.props.supportedCurrencies}/>
        <CurrencyInput currencyValue={this.props.data.currencyValue}/>
      </div>
    );
  }
});
