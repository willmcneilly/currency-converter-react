'use strict';

var React = require('react/addons');
var TopBar = require('./top-bar');
var CurrencyNode = require('./currency-node');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: [{id: 0, currencyType: "GBP", currencyValue: 10.00}, {id: 1, currencyType: "USD", currencyValue: 5.00}]};
  },

  handleCurrencyTypeChange: function() {

  },

  handleCurrencyValueChange: function(id, value) {
    var data = this.state.data;
    var clone = data.splice(0);
    clone[id]['currencyValue'] = value;
    debugger;
    this.setState({data: clone});
  },

  render: function() {
    var self = this;
    var nodes = this.state.data.map(function (nodeData) {
      return <CurrencyNode data={nodeData} supportedCurrencies={self.props.supportedCurrencies} currencyTypeChange={self.props.handleCurrencyTypeChange} currencyValueChange={self.handleCurrencyValueChange}/>;
    });

    return(
      <div className="currency-app-wrapper">
        <TopBar />
        {nodes}
      </div>
    );
  }
});
