const Conversations = require("../models/conversations.models");
const Participants = require("../models/participants.models");
const Users = require("../models/users.models");
const Messages = require("../models/messages.models");
const uuid = require("uuid");

const findAllConversations = async (userId) => {
  const data = await Conversations.findAll({
    include: {
      model: Participants,
      where: {
        userId: userId,
      },
    },
  });
  return data.map(({ id, name, profileImage, isGroup, createdAt }) => ({
    id,
    name,
    profileImage,
    isGroup,
    createdAt,
  }));
};

const createConversation = async (
  conversationObj,
  userOwnerId,
  userGuestId
) => {
  const userGuest = await Users.findOne({ where: { id: userGuestId } });

  if (!userGuest) {
    return false;
  }
  // Create conversation
  const newConversation = await Conversations.create({
    id: uuid.v4(),
    name: conversationObj.name,
    profileImage: conversationObj.profileImage,
    isGroup: conversationObj.isGroup,
  });

  // Owner participant
  await Participants.create({
    id: uuid.v4(),
    userId: userOwnerId,
    conversationId: newConversation.id,
    isAdmin: true,
  });

  // Guest participant
  await Participants.create({
    id: uuid.v4(),
    userId: userGuestId,
    conversationId: newConversation.id,
    isAdmin: false,
  });

  return newConversation;
};

const createMessage = async (conversationId, participantId, text) => {
  const participant = await Participants.findOne({
    where: { id: participantId, conversationId },
  });

  if (!participant) {
    return false;
  }

  const newMessage = await Messages.create({
    id: uuid.v4(),
    text,
    participantId,
    conversationId,
  });

  return newMessage;
};

module.exports = {
  findAllConversations,
  createConversation,
  createMessage,
};
