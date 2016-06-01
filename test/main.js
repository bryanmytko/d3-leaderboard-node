var chai = require("chai"),
  expect = chai.expect,
  util   = require("util"),
  sinon  = require("sinon"),
  sinonChai = require("sinon-chai");

var envVars = require('./env-vars'),
  api_key = envVars['BLIZZARD_API_KEY'];

chai.use(sinonChai);

var D3 = require("../main.js"),
  client = new D3(api_key, "enUS");

describe("D3", function(){
  describe("when instantiated", function(){
    it("returns a client", function(){
      expect(client).to.be.an.instanceof(D3);
    });
  });

  describe("when instantiated without an API key", function(){
    it("throw API key error", function(){
      var fn = function(){ new D3(); }
      expect(fn).to.throw('CustomError', 'No API key set!');
    });
  });
});

