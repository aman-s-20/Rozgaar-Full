const express = require("express");
const multer = require("multer");
const fs = require("fs");
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
  
  router.post("/resume", upload.single("file"), (req, res) => {
    const { file } = req;
  
    if (!file) {
      res.status(400).json({
        message: "No file uploaded",
      });
      return;
    }
  
    if (path.extname(file.originalname).toLowerCase() !== ".pdf") {
      res.status(400).json({
        message: "Invalid format. Only PDF files are allowed.",
      });
      return;
    }
  
    const filePath = file.path;
  
    fs.rename(filePath, `public/resume/${file.filename}`, (err) => {
      if (err) {
        res.status(400).json({
          message: "Error while uploading",
        });
      } else {
        res.send({
          message: "File uploaded successfully",
          url: `/host/resume/${file.filename}`,
        });
      }
    });
  });
  
  router.post("/profile", upload.single("file"), (req, res) => {
    const { file } = req;
  
    if (!file) {
      res.status(400).json({
        message: "No file uploaded",
      });
      return;
    }
  
    if (path.extname(file.originalname).toLowerCase() !== ".png"&&path.extname(file.originalname).toLowerCase() !== ".jpg") {
      res.status(400).json({
        message: "Invalid format. Only PNG OR JPG files are allowed.",
      });
      return;
    }
  
    const filePath = file.path;
  
    fs.rename(filePath, `public/profile/${file.filename}`, (err) => {
      if (err) {
        res.status(400).json({
          message: "Error while uploading",
        });
      } else {
        res.send({
          message: "File uploaded successfully",
          url: `/host/profile/${file.filename}`,
        });
      }
    });
  });
  

module.exports = router;