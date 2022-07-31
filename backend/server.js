const express = require('express');
const app = express();
const multer = require("multer");
const cors = require('cors');
const { s3Uploadv3 } = require('../s3Service');

app.use(cors());

// const storage = multer.memoryStorage();

app.post("/upload", (req, res) => {
    setTimeout(() => {
        console.log('File uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000)
});

app.delete("/upload", (req, res) => {
    console.log('File deleted')
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.get('/download', (req, res) => {
    console.log("File downloaded")
    return res.download();
})

app.listen(5000, () => {
    console.log("server running on port 5000")
});