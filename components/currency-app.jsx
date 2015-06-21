'use strict';

//

var React = require('react/addons');
var TopBar = require('./top-bar');
var CurrencyNode = require('./currency-node');
var _ = require('lodash');
var endPoint = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22GBPUSD%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

module.exports = React.createClass({
  getInitialState: function() {
    return {data: [
      {key: 0, currencyType: "GBP", currencyValue: 0},
      {key: 1, currencyType: "USD", currencyValue: 0}
      ]
    };
  },

  handleCurrencyTypeChange: function(id, value) {
    var mutation = {};
    mutation[id] = {currencyType: {$set: value}};
    var newData = React.addons.update(this.state.data, mutation);
    this.setState({data: newData});
  },

  handleCurrencyValueChange: function(id, value) {
    var mutation = {};
    mutation[id] = {currencyValue: {$set: value}};
    var newData = React.addons.update(this.state.data, mutation);
    this.setState({data: newData}, function(e) {
      // When this state is rendered, render the opposite
      this.changeOppositeCurrencyValue(id);
    });
  },

  changeOppositeCurrencyValue: function(idThatWasChanged) {
    // We can assume there was only ever two ids, 0, 1


    var self = this;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", endPoint);
    xmlhttp.onreadystatechange = function(d) {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200){

          var parsedData = JSON.parse(this.responseText);
          var exchangeRate = parseFloat(parsedData.query.results.rate.Rate);
          var oppositeID = idThatWasChanged === 1 ? 0 : 1;
          var mutation = {};

          var multiplier = parseFloat(self.state['data'][idThatWasChanged].currencyValue);
          var newRate = multiplier * exchangeRate;
          mutation[oppositeID] = {currencyValue: {$set: newRate}};
          var newData = React.addons.update(self.state.data, mutation);
          self.setState({data: newData});
        } else {
          console.log('error')
        }
      }
    }
    xmlhttp.send();


  },

  getExchangeRate: function() {

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
