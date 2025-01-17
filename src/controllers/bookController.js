const Book = require("../models/Book");
const Author = require("../models/Author");
const { Op } = require("sequelize");

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: Author });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new book
const addBook = async (req, res) => {
  try {
    const { title, genre, authorId } = req.body;
    const book = await Book.create({ title, genre, authorId });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, availability, authorId } = req.body;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.update({ title, genre, availability, authorId });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.destroy();
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get book by author
const getBooksByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const books = await Book.findAll({ where: { authorId }, include: Author });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search books by title, author, or genre
const searchBooks = async (req, res) => {
      try {
        const {title, author, genre} = req.body;

        let query = {};
        
        if(title){
           query.title = {[Op.iLike]:`%${title}%`};
        }

        if(author){
           const authorRecord = await Author.findOne({ where: { name: { [Op.iLike]: `%${author}%` } } });
           if (authorRecord) {
             query.authorId = authorRecord.id;  
           }
        }

        if(genre){
          query.genre = {[Op.iLike]:`%${genre}%`};
        }

        const books  = await Book.findAll({where : query});

        if(books .length === 0){
          return res.status(404).json({ message: "No books found matching your search criteria" });
        }

        res.status(200).json(books);

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBooksByAuthor,
  searchBooks,
};
