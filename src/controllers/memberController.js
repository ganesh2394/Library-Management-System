const Member = require("../models/Member");
const BorrowHistory = require("../models/BorrowHistory");

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new member
const addMember = async (req, res) => {
  try {
    const { name, contactInfo } = req.body;
    const member = await Member.create({ name, contactInfo });
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update member details
const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contactInfo } = req.body;
    const member = await Member.findByPk(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    await member.update({ name, contactInfo });
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a member
const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Member.findByPk(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    await member.destroy();
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get borrowing history of a member
const getMemberBorrowHistory = async (req, res) => {
  try {
    const { memberId } = req.params;
    const borrowHistory = await BorrowHistory.findAll({
      where: { memberId },
      include: ["Book"], // Make sure the 'Book' model is properly associated
    });
    res.status(200).json(borrowHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMembers,
  addMember,
  updateMember,
  deleteMember,
  getMemberBorrowHistory,
};
