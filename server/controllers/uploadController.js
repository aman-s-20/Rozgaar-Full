const fs = require("fs");

async function uploadResume(req, res) {
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
}


async function uploadProfile(req, res) {
    const { file } = req;

    if (!file) {
        res.status(400).json({
            message: "No file uploaded",
        });
        return;
    }

    if (path.extname(file.originalname).toLowerCase() !== ".png" && path.extname(file.originalname).toLowerCase() !== ".jpg") {
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
}


module.exports = { uploadResume, uploadProfile }