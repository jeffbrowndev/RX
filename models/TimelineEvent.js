var keystone = require('keystone');

var TimelineEvent = new keystone.List('TimelineEvent', {
  autokey: {
    from: 'title',
    path: 'key',
    unique: true
  },
  plural: 'Timeline Events',
  singular: 'Timeline Event'
});

TimelineEvent.add({
  year: { type: String },
  event: { type: String },
  link: { type: String }
});

TimelineEvent.defaultColumns = 'year, event';

TimelineEvent.register();