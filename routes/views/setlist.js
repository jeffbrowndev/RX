var keystone = require('keystone');
var Songs = keystone.list('songs');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  view.query('songs', Songs.model.find());
  view.render('setlist');
};
