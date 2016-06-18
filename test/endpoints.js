var chai = require('chai'),
  expect = chai.expect,
  util   = require('util'),
  sinon  = require('sinon'),
  sinonChai = require('sinon-chai');

var envVars = require('./env-vars'),
  access_token = envVars['BLIZZARD_ACCESS_TOKEN'];

var D3 = require('../main.js'),
  client = new D3(access_token, 'enUS');

describe('D3 Endpoints', function(){
  describe('/seasons/', function(){
    it('returns seasons data', function(done){
      client.seasons(function(error, response){
        expect(error).to.be.null;
        expect(response).to.not.be.undefined;
        done();
      });
    });
  });

  describe('/seasons/:id', function(){
    it('returns season data', function(done){
      client.seasons({ id: 5 }, function(error, response){
        expect(error).to.be.null;
        expect(response).to.not.be.undefined;
        done();
      });
    });
  });

  describe('/era', function(){
    it('returns era data', function(done){
      client.eras(function(error, response){
        expect(error).to.be.null;
        expect(response).to.not.be.undefined;
        done();
      });
    });
  });
});
