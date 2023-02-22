const conversationControllers = require("./conversations.controllers");
const responses = require("../utils/handleResponses");

const getConversationsByUser = (req, res) => {
  const userId = req.user.id;

  conversationControllers
    .findAllConversations(userId)
    .then((data) => {
      responses.success({
        status: 200,
        data,
        message: data.length
          ? "Getting all your conversations"
          : "No conversations :(",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all your conversations",
        res,
      });
    });
};

const postNewConversation = (req, res) => {
  const ownerId = req.user.id;
  const { guestId, ...conversationObj } = req.body;

  conversationControllers
    .createConversation(conversationObj, ownerId, guestId)
    .then((data) => {
      if (data) {
        responses.success({
          status: 201,
          data,
          message: "Conversation created successfully",
          res,
        });
      } else {
        responses.error({
          status: 400,
          message: `User with ID: ${guestId}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        res,
        status: 400,
        message: err.message || "Something went bad creating the conversation",
        data: err,
        fields: {
          name: "String",
          profileImage: "String",
          isGroup: "Boolean",
          guestId: "String UUID",
        },
      });
    });
};

module.exports = {
  getConversationsByUser,
  postNewConversation,
};
