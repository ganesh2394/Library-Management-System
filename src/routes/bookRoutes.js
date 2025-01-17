const express = require("express");
const { getAllBooks, addBook, updateBook, deleteBook, getBooksByAuthor, searchBooks} = require("../controllers/bookController");
const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/author/:authorId', getBooksByAuthor);
router.get('/search', searchBooks);

module.exports = router;
