const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Member = sequelize.define("Member", {
  name: { type: DataTypes.STRING, allowNull: false },
  contactInfo: { type: DataTypes.STRING },
});

module.exports = Member;
