const usersServices = require("./users.services");

const router = require("express").Router();

router.get("/users", usersServices.getAllUsers);

router.get("/users/:id", usersServices.getUserById);

router.get("/users/:email", usersServices.getUserByEmail);

router.get("/users/:name", usersServices.getUserByName);

router.post("/users", usersServices.createUser);

router.put("/users/:id", usersServices.updateUser);

router.delete("/users/:id", usersServices.deleteUser);

module.exports = router;
