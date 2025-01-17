const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Book = require("./Book");
const Member = require("./Member");

const BorrowHistory = sequelize.define("BorrowHistory", {
  borrowDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  returnDate: { type: DataTypes.DATE },
  returnStatus: { type: DataTypes.BOOLEAN, defaultValue: false },
});

BorrowHistory.belongsTo(Book, { foreignKey: "bookId" });
BorrowHistory.belongsTo(Member, { foreignKey: "memberId" });

module.exports = BorrowHistory;
