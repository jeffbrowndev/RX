var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

// Import all routes
var routes = {
  views: importRoutes('./views'),
};

// Route binding
exports = module.exports = function (app) {
  app.get('/', routes.views.index)
};