var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
  email: String,
  password: String,
  bio: String,
  gender: String,
  age: Number,
  first_name: String,
  last_name: String
},{
	collections: 'Users'
},{
	timestamps: true
});

module.exports = mongoose.model('Users', Users);

