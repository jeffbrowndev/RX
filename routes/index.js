var dotenv = require('dotenv');
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Configure dotenv & global variables
dotenv.config();

// Import all routes
var routes = {
  views: importRoutes('./views')
};

// Route binding
exports = module.exports = function (app) {
  app.get('/', routes.views.index);
  app.get('/about', routes.views.about);
  app.get('/contact', routes.views.contact);
  app.get('/music', routes.views.music);
  app.get('/calendar', routes.views.calendar);
  app.get('/setlist', routes.views.setlist);
};
