const { DataTypes } = require("sequelize");

const db = require("../config/database");

const Participants = require("./participants.models");

const Message = db.define("messages", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  participantId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Participants,
      key: "id",
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Sent",
  },
});

module.exports = Message;
