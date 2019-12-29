var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comments = new Schema({
  commented_by: String,
  post_id: String,
  comment: String
},{
	collections: 'Comments'
},{
	timestamps: true
});

module.exports = mongoose.model('Comments', Comments);

