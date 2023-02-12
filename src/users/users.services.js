const usersControllers = require("./users.controllers");

const getAllUsers = async (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  usersControllers
    .getUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request" });
    });
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  usersControllers
    .getUserByEmail(email)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      }
      res.status(404).json({ message: "User not found" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request" });
    });
};

const getUserByName = async (req, res) => {
  const { name } = req.params;
  usersControllers
    .getUserByName(name)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      }
      res.status(404).json({ message: "User not found" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request" });
    });
};

const createUser = async (req, res) => {
  const user = req.body;
  usersControllers
    .createUser(user)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedUser = await usersControllers.updateUser(id, updateData);
    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
        return;
      }
      res.status(404).json({ message: "User not found" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request" });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
};
