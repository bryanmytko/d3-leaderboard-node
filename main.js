var unirest = require('unirest');

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

  D3.prototype[method_name] = function(params, callback){
    var self = this;
    api_method.call(self, method.resource, params, callback);
  }
});

function api_method(endpoint, params, callback){
  var params = params || {};
  params.locale = this.locale;
  params.access_token = 'cn8fwfkjepzsr9hkda4n3m95';

  // @TODO replace all possible params
  var endpoint = endpoint.replace(':id', params.id)

  unirest.get(Endpoints.base_url + "/" + endpoint)
    .query(params)
    .end(function(response){
      if(response.ok){
        callback(null, response.body);
      } else {
        callback(response.error, null);
      }
    });
}

module.exports = D3;
