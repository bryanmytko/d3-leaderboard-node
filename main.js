var unirest = require('unirest');
var merge = require('merge');

var CustomError = require('./custom-error');
var Endpoints = require('./endpoints');

module.exports = function D3(api_key, locale){
  this.api_key = api_key; //|| throw new CustomError('No API key set!', 1);
  this.locale = locale || "enUS";

  return this;
}
