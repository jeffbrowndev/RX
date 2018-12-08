var keystone = require('keystone');

var Event = new keystone.List('Event', {
  autokey: { from: 'title', path: 'key', unique: true },
  plural: 'Events',
  singular: 'Event'
});

Event.add({
  description: { type: String },
  venue: { type: String },
  location: { type: String },
  dateTime: { type: keystone.Field.Types.Datetime },
  price: { type: keystone.Field.Types.Money },
  ages: { type: keystone.Field.Types.Select, options: "All Ages, 21+" },
  ticketLink: { type: String }
});

Event.defaultColumns = 'artists, venue, location, date, price';

Event.register();