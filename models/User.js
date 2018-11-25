var keystone = require('keystone');

// Create a new user
var User = new keystone.List('User');

// Add properties to the User model
User.add({
  displayName: { type: String },
  password: { type: keystone.Field.Types.Password },
  email: { type: keystone.Field.Types.Email, unique: true }
})

// Gives the user access to the Keystone back end
User.schema.virtual('canAccessKeystone').get(function () {
  return true;
})

// Adds the appropriate fields to the admin UI
User.defaultColumns = 'id, displayName, email';

User.register();