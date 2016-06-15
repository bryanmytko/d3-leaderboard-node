var chai = require('chai'),
  expect = chai.expect,
  util   = require('util'),
  sinon  = require('sinon'),
  sinonChai = require('sinon-chai');

var envVars = require('./env-vars'),
  api_key = envVars['BLIZZARD_API_KEY'];

chai.use(sinonChai);

var D3 = require('../main.js'),
  client = new D3(api_key, 'enUS');

describe('D3', function(){
  describe('when instantiated', function(){
    it('returns a client', function(){
      expect(client).to.be.an.instanceof(D3);
    });
  });

  describe('when instantiated with a locale', function(){
    it('has a locale', function(){
      var client = new D3(api_key, 'jaJP');
      expect(client.locale).to.be.equal('jaJP');
    });
  });

  describe('when instantiated without a locale', function(){
    it('has a default locale', function(){
      var client = new D3(api_key);
      expect(client.locale).to.not.be.undefined;
    });
  });

  describe('when instantiated without an API key', function(){
    it('throws API key error', function(){
      var fn = function(){ new D3(); }
      expect(fn).to.throw('CustomError', 'No API key set!');
    });
  });

  describe('single season endpoint', function(){
    it('returns season data', function(done){
      var client = new D3(api_key);
      var params = { id: 6 };

      client.season(params, function(err, body){
        expect(body).to.not.be.undefined;
        done();
      });
    });
  });
});
