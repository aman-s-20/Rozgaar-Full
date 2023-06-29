const fs = require("fs");
const path = require("path");

async function getResume(req, res) {
    
    const address = path.join(__dirname, `../public/resume/${req.params.file}`);
    fs.access(address, fs.F_OK, (err) => {
        if (err) {
            res.status(404).json({
                message: "File not found",
            });
            return;
        }
        res.sendFile(address);
    });
}

async function getProfile(req, res) {
    const address = path.join(__dirname, `../public/profile/${req.params.file}`);
    fs.access(address, fs.F_OK, (err) => {
        if (err) {
            res.status(404).json({
                message: "File not found",
            });
            return;
        }
        res.sendFile(address);
    });
}

module.exports = {
    getResume,
    getProfile
}