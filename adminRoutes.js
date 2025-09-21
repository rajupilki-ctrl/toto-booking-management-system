const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers.js");

// POST → create admin
router.post("/", adminController.createAdmin);

// GET → get all admins
router.get("/", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;