var unirest = require('unirest');
var merge = require('merge');

var CustomError = require('./custom-error');
var Endpoints = require('./endpoints');

module.exports = function D3(api_key, locale){
  if(api_key) this.api_key = api_key;
  else throw new CustomError('No API key set!');

  this.locale = locale || "enUS";

  return this;
}
