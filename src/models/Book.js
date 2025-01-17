const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Author = require("./Author");

const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Book.belongsTo(Author, {
  foreignKey: "authorId",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});

module.exports = Book;
