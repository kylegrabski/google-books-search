const router = require("express").Router();
const booksController = require("../../controllers/booksSearchController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksSearchController.findAll);

module.exports = router;