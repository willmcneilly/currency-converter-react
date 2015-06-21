'use strict';

var React = require('react/addons');
var TopBar = require('./top-bar');
var CurrencyNode = require('./currency-node');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: [{key: 0, currencyType: "GBP", currencyValue: 0}, {key: 1, currencyType: "USD", currencyValue: 0}]};
  },

  handleCurrencyTypeChange: function(id, value) {
    var data = this.state.data;
    var clone = _.cloneDeep(data);
    clone[id]['currencyType'] = value;
    this.setState({data: clone});
  },

  handleCurrencyValueChange: function(id, value) {
    // var d = this.state.data[id];
    var mutation = {};
    mutation[id] = {currencyValue: {$set: value}};
    var newData = React.addons.update(this.state.data, mutation);
    this.setState({data: newData}, function(e) {
      this.changeOppositeCurrencyValue(id);
    });

    // d['data'][id]['currencyValue'] = parseFloat(value);
    // // this.replaceState(clone);
    // this.forceUpdate();



    //this.changeOppositeCurrencyValue(id);
  },

  changeOppositeCurrencyValue: function(idThatWasChanged) {
    // We can assume there was only ever two ids, 0, 1
    var oppositeID = idThatWasChanged === 1 ? 0 : 1;
    var mutation = {};
    mutation[oppositeID] = {currencyValue: {$set: Math.floor(Math.random() * 100)}};
    var newData = React.addons.update(this.state.data, mutation);
    this.setState({data: newData});
  },

  render: function() {
    var self = this;
    var nodes = this.state.data.map(function (nodeData) {
      return <CurrencyNode data={nodeData} supportedCurrencies={self.props.supportedCurrencies} currencyTypeChange={self.handleCurrencyTypeChange} currencyValueChange={self.handleCurrencyValueChange}/>;
    });

    return(
      <div className="currency-app-wrapper">
        <TopBar />
        {nodes}
      </div>
    );
  }
});
