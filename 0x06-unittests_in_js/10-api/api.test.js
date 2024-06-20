const { expect } = require('chai');
const request = require('request');

const server = require('./api');

describe('Endpoints', () => {
  after(() => {
    server.close();
  });

  describe('GET /available_payments', () => {
    it('Correct status code and response', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET'
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('Correct status code and response', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: 'Betty' })
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
