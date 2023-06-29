const express = require("express");
const multer = require("multer");

const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/resume"); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename); // Use UUID to generate a unique filename
  },
});

const upload = multer({ storage });
// upload resume to folder
router.post("/resume", upload.single("file"), uploadController.uploadResume());

// upload profile img to folder
router.post("/profile", upload.single("file"), uploadController.uploadProfile());
 

module.exports = router;