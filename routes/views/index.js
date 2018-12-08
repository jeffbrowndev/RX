var keystone = require('keystone');
var Events = keystone.list('events');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  view.query('events', Events.model.find());
  view.render('index');
};
