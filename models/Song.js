var keystone = require('keystone');

var Song = new keystone.List('Song', {
  autokey: {
    from: 'title',
    path: 'key',
    unique: true
  },
  plural: 'Songs',
  singular: 'Song'
});

Song.add({
  songName: { type: String },
  artist: { type: String },
  songName: { type: String },
  genre: {
    type: keystone.Field.Types.Select,
    options:
      "Classic Rock, R&B/Soul, Pop, Blue, 90's Rock, Adult Contempoary, Folk, 50's, Holiday, Disney, "
  }
});

Song.defaultColumns = 'songName, artist, genre';

Song.register();
