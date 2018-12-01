var keystone = require('keystone');

// Initialize keystone
keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'RX',
  'brand': 'RX',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'views': 'templates/views',
  'view engine': 'pug',
  'static': 'public',
  'cloudinary config':
    'cloudinary://857443731375474:_ejMllc9Bxt0vs2da9MMNIhhR2o@rx'
});

// Import models
keystone.import('models');

// Set location for routes
keystone.set('routes', require('./routes'));

// Start keystone
keystone.start();
