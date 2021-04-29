const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  //may not need put, only get and delete? maybe just delete?
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;