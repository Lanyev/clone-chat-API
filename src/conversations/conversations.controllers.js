const Conversations = require("../models/conversations.models");

const getAllConversations = async () => {
  const data = await Conversations.findAll();
  return data;
};

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id,
    },
  });
  return data;
};
