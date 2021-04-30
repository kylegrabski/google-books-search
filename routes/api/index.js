const router = require("express").Router();
const booksRoutes = require("./books");
const searchRoutes = require('./search');


router.use("/books", booksRoutes);
router.use("/search", searchRoutes)


module.exports = router;