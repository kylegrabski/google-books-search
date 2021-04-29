const router = require("express").Router();
const booksRoutes = require("./bookss");


router.use("/books", booksRoutes);

module.exports = router;