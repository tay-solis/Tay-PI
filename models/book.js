const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  isPartofSeries: Boolean,
  keywords: [String],
  reasonsForRecommendation: [String]
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
