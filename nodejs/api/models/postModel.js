var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Posts = new Schema({
  title: String,
  description: String,
  likes: Number,
  image_url: String,
  author: String
},{
	collections: 'Posts'
},{
	timestamps: true
});

module.exports = mongoose.model('Posts', Posts);

