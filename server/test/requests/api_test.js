'use strict';

//var chai        = require('chai'),
//    expect      = chai.expect;
var Lab    = require("lab");
var lab    = exports.lab = Lab.script();
var Code   = require("code");
var server = require('../../../index.js');


lab.experiment('the backend API', function() {

  lab.test('401 to GET  /api/hello', function (done) {
    var options = {
      method: "GET",
      url: "/api/hello"
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(401);
      //server.stop(done);
    });
  });

  lab.test('422 to POST /api/users', function (done) {
    var options = {
      method: "POST",
      url: "/api/users",
      payload: {
        email: "rockyj@example.com",
        password: "123456",
        passwordConfirmation: "1234569999"
      }
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(422);
      //server.stop(done);
    });
  });

  lab.afterEach(function (done) {
    server.stop(done);
  })

});
