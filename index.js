const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const phone = req.body.phone;
  //const file = req.body.file;
  const message = req.body.message;

  console.log('Phone Number:', phone);
  //console.log('File:', file);
  console.log('Message:', message);

  res.send('Form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

