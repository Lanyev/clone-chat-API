const { Sequelize } = require("sequelize");
const db = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

const Conversations = require("./conversations.models")(db, Sequelize);
const Messages = require("./messages.models")(db, Sequelize);
const Participants = require("./participants.models")(db, Sequelize);
const Users = require("./users.models")(db, Sequelize);

// create the associations between the models
Conversations.hasMany(Messages, {
  foreignKey: "conversationId",
  as: "messages",
});
Messages.belongsTo(Conversations, {
  foreignKey: "conversationId",
  as: "conversation",
});

Conversations.hasMany(Participants, {
  foreignKey: "conversationId",
  as: "participants",
});
Participants.belongsTo(Conversations, {
  foreignKey: "conversationId",
  as: "conversation",
});

Users.hasMany(Participants, {
  foreignKey: "userId",
  as: "participants",
});
Participants.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

// export the models

module.exports = {
  Conversations,
  Messages,
  Participants,
  Users,
};
