import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to handlers in the given Express application.
 * @param {Express.Application} app - The Express application instance.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
