var keystone = require('keystone');
var Albums = keystone.list('albums');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  view.query('albums', Albums.model.find());
  view.render('music');
};
