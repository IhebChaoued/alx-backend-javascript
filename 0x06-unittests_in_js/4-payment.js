const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Stub Utils.calculateNumber to always return 10
  const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

  // Call the stubbed function
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);

  // Restore the stub after testing
  calculateNumberStub.restore();
}

module.exports = sendPaymentRequestToApi;
