var keystone = require('keystone');

var Album = new keystone.List('Album', {
  autokey: { from: 'title', path: 'key', unique: true },
  plural: 'Albums',
  singular: 'Album'
});

Album.add({
  title: { type: String },
  releaseYear: { type: String },
  tracks: { type: keystone.Field.Types.TextArray },
  image: { type: keystone.Field.Types.CloudinaryImage },
  spotifyUrl: { type: String },
  itunesUrl: { type: String }
});

Album.defaultColumns = 'title';

Album.register();
