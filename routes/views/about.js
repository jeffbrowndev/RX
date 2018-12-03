var keystone = require('keystone');
var TimelineEvents = keystone.list('TimelineEvent');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  view.query('TimelineEvents', TimelineEvents.model.find());
  view.render('about');
};