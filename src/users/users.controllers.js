const Users = require("../models/users.models");

const getAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createUser = async (user) => {
  const data = await Users.create(user);
  return data;
};

const updateUser = async (id, user) => {
  const data = await Users.update(user, {
    where: {
      id,
    },
  });
  return data;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
