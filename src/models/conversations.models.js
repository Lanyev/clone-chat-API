const DataTypes = require("sequelize");
const db = require("../database");

const Conversation = db.define("conversation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isGroup: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Conversation;
