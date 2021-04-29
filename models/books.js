const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Books = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  link: { type: String },
});

const Books = mongoose.model("Post", Books);

module.exports = SaveSearch;
