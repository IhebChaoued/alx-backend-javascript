function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Return an empty resolved promise if success is false
  }
}

module.exports = getPaymentTokenFromAPI;
