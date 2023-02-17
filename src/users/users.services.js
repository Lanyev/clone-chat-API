const responses = require("../utils/handleResponses");
const usersControllers = require("./users.controllers");

const getAllUsers = async (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      responses.success({
        res,
        data,
        status: 200,
        message: "All users retrieved successfully",
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Bad request",
        res,
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .findUserById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting User with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `User with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the user",
        res,
      });
    });
};

// const findUserByEmail = async (req, res) => {
//   const { email } = req.params;
//   usersControllers
//     .findUserByEmail(email)
//     .then((data) => {
//       if (data) {
//         responses.success({
//           res,
//           data,
//           status: 200,
//           message: "User found",
//         });
//       } else {
//         responses.error({
//           res,
//           status: 404,
//           message: "User not found",
//         });
//       }
//     })
//     .catch((err) => {
//       responses.error({
//         res,
//         status: 400,
//         message: "Bad request",
//       });
//     });
// };

const createUser = async (req, res) => {
  const userObj = req.body;
  usersControllers
    .createNewUser(userObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: `User created succesfully with id: ${data.id}`,
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Error ocurred trying to create a new user",
        res,
        fields: {
          firstName: "String",
          lastName: "String",
          email: "example@example.com",
          password: "String",
          profileImage: "example.com/image.png",
          phone: "+52 1234 123 123",
        },
      });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const userObj = req.body;

  usersControllers
    .updateUser(id, userObj)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `User with id: ${id} modified successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `The user with ID ${id} not found`,
          res,
          fields: {
            firstName: "String",
            lastName: "String",
            email: "example@example.com",
            password: "String",
            profileImage: "example.com/image.png",
            phone: "+52 1234 123 123",
          },
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to update user with id ${id}`,
        res,
        fields: {
          firstName: "String",
          lastName: "String",
          email: "example@example.com",
          password: "String",
          profileImage: "example.com/image.png",
          phone: "+52 1234 123 123",
        },
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `User with id: ${id} deleted successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          data: err,
          message: `The user with ID ${id} not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to delete user with id ${id}`,
        res,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  // findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
