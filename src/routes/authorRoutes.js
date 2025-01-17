const express = require("express");
const {
  getAllAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthor,
} = require("../controllers/authorController");
const router = express.Router();

router.get("/", getAllAuthors);
router.post("/", addAuthor);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);
router.get("/:authorId/books", getBooksByAuthor);
module.exports = router;
