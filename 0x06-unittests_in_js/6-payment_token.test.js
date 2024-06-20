const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the test is complete
      })
      .catch((err) => {
        done(err); // Call done with error if there's any
      });
  });

  it('should return undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done(); // Call done to indicate the test is complete
      })
      .catch((err) => {
        done(err); // Call done with error if there's any
      });
  });
});
