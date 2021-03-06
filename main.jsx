'use strict';

var React = require('react');
var CurrencyApp = require('./components/currency-app');
var supportedCurrencies = ['GBP', 'USD', 'BTC', 'EUR', 'JPY', 'AUD', 'CAD'];

React.render(
  <CurrencyApp supportedCurrencies={supportedCurrencies}/>,
  document.getElementById('react-container')
);
