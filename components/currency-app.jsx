'use strict';

var React = require('react');
var TopBar = require('./top-bar');
var CurrencyNode = require('./currency-node');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: [{currencyType: "GBP", currencyValue: 10.00}, {currencyType: "USD", currencyValue: 5.00}]};
  },

  render: function() {
    return(
      <div className="currency-app-wrapper">
        <TopBar />
        <CurrencyNode data={this.state.data[0]} supportedCurrencies={this.props.supportedCurrencies}/>
        <CurrencyNode data={this.state.data[1]} supportedCurrencies={this.props.supportedCurrencies}/>
      </div>
    );
  }
});
