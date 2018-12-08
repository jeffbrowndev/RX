var keystone = require('keystone');

var Image = new keystone.List('Image', {
  autokey: {
    from: 'title',
    path: 'key',
    unique: true
  },
  plural: 'Images',
  singular: 'Image'
});

Image.add({
  description: { type: String },
  image: { type: keystone.Field.Types.CloudinaryImage }
});

Image.defaultColumns = 'description';

Image.register();