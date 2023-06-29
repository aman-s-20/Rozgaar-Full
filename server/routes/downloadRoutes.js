const express = require("express");
const downloadController = require('../controllers/downloadController');
const router = express.Router();

router.get("/resume/:file", downloadController.getResume);

router.get("/profile/:file", downloadController.getProfile);

module.exports = router;
