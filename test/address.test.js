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

describe('API - Address', () => {
  describe('When searching by an inexisting postal code', () => {
    it('should return an empty array', (done) => {
      chai.request(app)
        .get('/api/address/postalcode/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.lengthOf(0);
          done();
        });
    });
  });

  describe('When searching by an inexisting city', () => {
    it('should return an empty array', (done) => {
      chai.request(app)
        .get('/api/address/city/aaa')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.lengthOf(0);
          done();
        });
    });
  });
});
