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
        expect(response.season).to.not.be.empty;
        done();
      });
    });
  });

  describe('/seasons/:id', function(){
    it('returns season data', function(done){
      client.season({ id: 5 }, function(error, response){
        expect(response.season_id).to.equal(5);
        done();
      });
    });
  });

  describe('/era', function(){
    it('returns eras data', function(done){
      client.eras(function(error, response){
        expect(response.era).to.not.be.empty;
        done();
      });
    });
  });

  describe('/era/:id', function(){
    it('returns era data', function(done){
      client.era({ id: 4 }, function(error, response){
        expect(response.era_id).to.equal(4);
        done();
      });
    });
  });

  // @TODO
  // season/:id/leaderboard/:leaderboard
  // era/:id/leaderboard/:leaderboard
  // E.g., 
  // client.era({ id: 4, leaderboard: 'achievement-points' }, function(){})
});
