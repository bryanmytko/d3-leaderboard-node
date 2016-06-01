var unirest = require('unirest');
var merge = require('merge');

var CustomError = require('./custom-error');
var Endpoints = require('./endpoints');

var D3 = function (api_key, locale){
  if(api_key) this.api_key = api_key;
  else throw new CustomError('No API key set!');

  this.locale = locale || "enUS";

  return this;
}

Object.keys(Endpoints.methods).forEach(function(m){
  var method_name = m.replace(" ","-");
  var method = Endpoints.methods[m];

  D3.prototype[method_name] = function(params){
    var self = this;
    api.call(self, method.resource, params);
  }
});

function api(endpoint, params){
  console.log(endpoint);
  console.log(params);
}

module.exports = D3;
