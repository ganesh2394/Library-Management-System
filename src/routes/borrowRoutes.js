const express = require("express");
const {borrowBook, returnBook, getBorrowHistory} = require("../controllers/borrowController");
const router = express.Router();


router.post("/borrow", borrowBook);
router.post("/return", returnBook);
router.get("/:memberId/history", getBorrowHistory);

module.exports = router;