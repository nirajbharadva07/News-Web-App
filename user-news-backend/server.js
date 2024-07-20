const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');  // Import the cors package

const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle POST request at /submit
app.post('/submit', upload.single('video'), (req, res) => {
  const { newsName, userDetails } = req.body;
  const video = req.file;

  // Do something with the received data
  console.log('News Name:', newsName);
  console.log('User Details:', userDetails);
  console.log('Video:', video);

  res.json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
