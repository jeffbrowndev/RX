const keystone = require('keystone');
const Albums = keystone.list('albums');

exports = module.exports = function (req, res) {
  const view = new keystone.View(req, res);
  view.query('albums', Albums.model.find());
  view.render('music');
};
