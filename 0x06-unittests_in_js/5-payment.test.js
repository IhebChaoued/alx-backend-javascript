const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleStub;

  beforeEach(() => {
    // Create a spy on console.log to capture its output
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log function after each test
    consoleStub.restore();
  });

  it('should log the correct sum message for 100 and 20', () => {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('should log the correct sum message for 10 and 10', () => {
    // Call the function under test
    sendPaymentRequestToApi(10, 10);

    // Assertions
    expect(consoleStub.calledOnce).to.be.true;
    expect(consoleStub.firstCall.args[0]).to.equal('The total is: 20');
  });
});
