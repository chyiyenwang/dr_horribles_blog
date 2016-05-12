var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Post', PostSchema);