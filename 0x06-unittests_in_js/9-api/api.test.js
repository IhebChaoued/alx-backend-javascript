const { expect } = require('chai');
const request = require('request');

describe('Integration testing for /cart/:id', () => {
  it('Returns payment methods for valid cart ID', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Returns 404 error for non-numeric cart ID', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Error: Not Found');
      done();
    });
  });
});
