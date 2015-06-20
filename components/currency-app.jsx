'use strict';

var React = require('react');
var TopBar = require('./top-bar');
var CurrencyNode = require('./currency-node');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="currency-app-wrapper">
        <TopBar />
        <CurrencyNode />
        <CurrencyNode />
      </div>
    );
  }
});
