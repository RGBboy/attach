/**
 * Module dependencies.
 */

var should = require('should'),
    attach = require('../');

describe('Attach', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      attach.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('.extend', function () {

    it('should be a function', function (done) {
      attach.extend.should.be.a.function;
      done();
    });

  });

});