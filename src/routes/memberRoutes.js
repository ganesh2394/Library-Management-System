const express = require("express");
const {
  getAllMembers,
  addMember,
  updateMember,
  deleteMember,
  getMemberBorrowHistory,
} = require("../controllers/memberController");
const router = express.Router();

router.get("/", getAllMembers);
router.post("/", addMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);
router.get("/:memberId/borrow-history", getMemberBorrowHistory);

module.exports = router;
