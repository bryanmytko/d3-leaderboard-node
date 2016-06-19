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
  var method_name = m.replace(" ","_");
  var method = Endpoints.methods[m];

  D3.prototype[method_name] = function(arg1, arg2){
    var self = this;

    switch(arguments.length){
      case 1:
        api_method.call(self, method.resource, null, arg1);
        break;
      case 2:
        api_method.call(self, method.resource, arg1, arg2);
        break;
    }
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
