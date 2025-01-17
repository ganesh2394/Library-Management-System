const Author = require("../models/Author");
const Book = require("../models/Book");

// Get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new author
const addAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = await Author.create({ name, bio });
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an author's details
const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio } = req.body;
    const author = await Author.findByPk(id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    await author.update({ name, bio });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an author
const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByPk(id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    await author.destroy();
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all books by a specific author
const getBooksByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const books = await Book.findAll({
      where: { authorId },
    });
    if (books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found for this author" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthor,
};
