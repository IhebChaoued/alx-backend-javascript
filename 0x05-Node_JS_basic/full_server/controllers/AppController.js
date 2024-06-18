/**
 * Reads the data of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>}
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
