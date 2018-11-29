var keystone = require('keystone');

var Album = new keystone.List('Album', {
  autokey: { from: 'title', path: 'key', unique: true },
  plural: 'Albums',
  singular: 'Album'
});

Album.add({
  title: { type: String },
  releaseYear: { type: String },
  tracks: { type: keystone.Field.Types.TextArray }
});

Album.defaultColumns = 'title';

Album.register();
