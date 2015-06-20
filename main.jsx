'use strict';

var React = require('react');
var CurrencyApp = require('./components/currency-app');

var data = [{yo: "hey"}, {yo: "there"}];
var supportedCurrencies = ['GBP', 'USD', 'BTC', 'EUR'];

React.render(
  <CurrencyApp supportedCurrencies={supportedCurrencies}/>,
  document.getElementById('react-container')
);
