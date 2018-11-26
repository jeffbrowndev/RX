var keystone = require('keystone');

// Initialize keystone
keystone.init({
  'cookie secret': 'secure string goes here',
  name: 'RX',
  'user model': 'User',
  'auto update': true,
  auth: true,
  views: 'templates/views',
  'view engine': 'pug',
  'static': 'public',
});

// Import models
keystone.import('models');

// Set location for routes
keystone.set('routes', require('./routes'));

// Start keystone
keystone.start();
