const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

// POST → create user
router.post("/", userController.createUser);

// GET → get all users
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;