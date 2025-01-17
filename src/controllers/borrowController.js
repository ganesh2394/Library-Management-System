const BorrowHistory = require("../models/BorrowHistory");
const Book = require("../models/Book");
const Member = require("../models/Member");

// Borrow a book
const borrowBook = async (req, res) => {
  try {
    const { bookId, memberId } = req.body;

    const book = await Book.findByPk(bookId);
    if (!book || !book.availability) {
      return res.status(400).json({ message: "Book not available" });
    }

    await BorrowHistory.create({ bookId, memberId });
    await book.update({ availability: false });

    res.status(201).json({ message: "Book borrowed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Return a book
const returnBook = async (req, res) => {
  try {
    const { borrowId } = req.body;

    const borrowRecord = await BorrowHistory.findByPk(borrowId);
    if (!borrowRecord || borrowRecord.returnStatus) {
      return res.status(400).json({ message: "Invalid borrow record" });
    }

    await borrowRecord.update({ returnStatus: true, returnDate: new Date() });

    const book = await Book.findByPk(borrowRecord.bookId);
    await book.update({ availability: true });

    res.status(200).json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get borrow history for a member
const getBorrowHistory = async (req, res) => {
    try {
        const { memberId } = req.params;

        const history = await BorrowHistory.findAll({
            where: { memberId },
            include: [Book, Member],
        });

        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { borrowBook, returnBook, getBorrowHistory};
