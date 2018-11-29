var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Import all routes
var routes = {
  views: importRoutes('./views')
};

// Route binding
exports = module.exports = function(app) {
  app.get('/', routes.views.index);
  app.get('/about', routes.views.about);
  app.get('/contact', routes.views.contact);
  app.get('/music', routes.views.music);
  app.get('/calendar', routes.views.calendar);
  app.get('/setlist', routes.views.setlist);
};
