require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 5500;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nihadazzam96@gmail.com',
    pass: '##########'
  }
});

app.post('/submit-feedback', (req, res) => {
  const feedback = req.body.feedback;
  console.log('Feedback received:', feedback);

  const mailOptions = {
    from: 'idriz_97@hotmail.fi',
    to: 'nihadazzam96@gmail.com',
    subject: 'New Feedback Received',
    text: feedback
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending feedback' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Feedback received and emailed' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
