const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 5500;

app.use(express.json()); // Middleware to parse JSON bodies

// Serve favicon.ico
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// Handle POST request to /submit-feedback
app.post('/submit-feedback', (req, res) => {
  const feedback = req.body;

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Feedback Received',
    text: `Feedback: ${feedback.message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending feedback' });
    } else {
      console.log('Email sent:', info.response);
      return res.json({ message: 'Feedback received and emailed' });
    }
  });
});

// Serve the HTML page for your feedback form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
