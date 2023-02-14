const Users = require("../models/users.models");
const uuid = require("uuid").v4;
const { hashPassword } = require("../utils/crypto");

const getAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createUser = async (userObj) => {
  const newUser = {
    id: uuid(),
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: hashPassword(userObj.password),
    profileImage: userObj.profileImage,
    phone: userObj.phone,
  };
  const data = await Users.create(newUser);
  return data;
};

const updateUser = async (id, user) => {
  //? data === [1] or [0]
  const data = await Users.update(user, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
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
