var unirest = require('unirest');
var merge = require('merge');
var endpoints = require('./endpoints');

function D3(api_key, locale){
  this.api_key = api_key;
  this.locale = locale;

  return this;
}
