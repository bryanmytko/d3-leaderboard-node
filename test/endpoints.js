var chai = require('chai'),
  expect = chai.expect,
  util = require('util'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  vcr = require('nock-vcr-recorder-mocha');


var envVars = require('./env-vars'),
  access_token = envVars['BLIZZARD_ACCESS_TOKEN'];

var D3 = require('../main.js'),
  client = new D3(access_token, 'enUS');

describe('D3 Endpoints', function(){
  describe('/seasons/', function(){
    vcr.it('returns seasons data', function(done){
      client.seasons(function(error, response){
        expect(response.season).to.not.be.empty;
        done();
      });
    });
  });

  describe('/seasons/:id', function(){
    vcr.it('returns season data', function(done){
      client.season({ id: 5 }, function(error, response){
        expect(response.season_id).to.equal(5);
        done();
      });
    });
  });

  describe('/era', function(){
    vcr.it('returns eras data', function(done){
      client.eras(function(error, response){
        expect(response.era).to.not.be.empty;
        done();
      });
    });
  });

  describe('/era/:id', function(){
    vcr.it('returns era data', function(done){
      client.era({ id: 4 }, function(error, response){
        expect(response.era_id).to.equal(4);
        done();
      });
    });
  });

  describe('/season/:id/leaderboard/:leaderboard', function(){
    vcr.it('returns a season leaderboard', function(done){
      this.timeout(5000);

      client.season_leaderboard(
        { id: 4, leaderboard: 'achievement-points' },
        function(error, response){
          expect(response.title.en_US).to.equal('Seasonal Achievement Score');
          done();
        }
      );
    });
  });

  describe('/era/:id/leaderboard/:leaderboard', function(){
    vcr.it('returns an era leaderboard', function(done){
      this.timeout(5000);

      client.era_leaderboard(
        { id: 4, leaderboard: 'rift-barbarian' },
        function(error, response){
          expect(response.title.en_US).to.equal('Barbarian Greater Rift');
          done();
        }
      );
    });
  });
});
