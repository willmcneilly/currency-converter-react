'use strict';

var React = require('react');
var ReactLabel = require('./components/react-label');
var start = new Date().getTime();

setInterval(function() {
  React.render(
    <ReactLabel elapsed={new Date().getTime() - start} />,
    document.getElementById('react-container')
  );

}, 50);
