var keystone = require('keystone');
var TimelineEvents = keystone.list('TimelineEvent');
var Images = keystone.list('images');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  view.query('TimelineEvents', TimelineEvents.model.find());
  view.query('Images', Images.model.find());
  view.render('about');
};