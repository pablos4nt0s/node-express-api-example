/* eslint-disable no-undef */
require('dotenv').load();

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../index');

// eslint-disable-next-line no-unused-vars
const should = chai.should();
chai.config.includeStack = true;
chai.use(chaiHttp);

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('Healthcheck', () => {
  describe('When testing connectivity', () => {
    it('should return ok from /healthcheck', (done) => {
      chai.request(app)
        .get('/healthcheck')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.equal('ok');
          done();
        });
    });
  });
});
