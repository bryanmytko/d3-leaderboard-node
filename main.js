var unirest = require('unirest');

var CustomError = require('./custom-error');
var Endpoints = require('./endpoints');

var D3 = function (access_token, locale){
  if(access_token) this.access_token = access_token;
  else throw new CustomError('No Access Token set!');

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
  params.access_token = this.access_token;

  var endpoint = endpoint
    .replace(':id', params.id)
    .replace(':leaderboard', params.leaderboard)

  unirest.get(Endpoints.base_url + "/" + endpoint)
    .query(params)
    .encoding('UTF-8')
    .end(function(response){
      if(response.ok){
        callback(null, response.body);
      } else {
        callback(response.error, null);
      }
    });
}

module.exports = D3;
