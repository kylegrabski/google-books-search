const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
  bookId: { type: String}
});

const Books = mongoose.model("SavedBooks", booksSchema);

module.exports = Books;
