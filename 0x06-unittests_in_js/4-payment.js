const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);

  calculateNumberStub.restore();
}

module.exports = sendPaymentRequestToApi;
