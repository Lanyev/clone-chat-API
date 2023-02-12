const { success, error } = require("../utils/handleResponses");
const usersControllers = require("./users.controllers");

const getAllUsers = async (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      success({
        res,
        data,
        status: 200,
        message: "All users retrieved successfully",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
      });
    });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  usersControllers
    .getUserById(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: "User found",
        });
      } else {
        error({
          res,
          status: 404,
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
      });
    });
};

const createUser = async (req, res) => {
  const user = req.body;
  usersControllers
    .createUser(user)
    .then((data) => {
      success({
        res,
        data,
        status: 201,
        message: "User created successfully",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
      });
    });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedUser = await usersControllers.updateUser(id, updateData);
    success({
      res,
      data: updatedUser,
      status: 200,
      message: "User updated successfully",
    });
  } catch (err) {
    error({
      res,
      data: err,
      status: 400,
      message: "Bad request",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: "User deleted successfully",
        });
        return;
      }
      error({
        res,
        status: 404,
        message: "User not found",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Bad request",
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
