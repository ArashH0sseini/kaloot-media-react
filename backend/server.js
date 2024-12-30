// Importing required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming request body as JSON
app.use(bodyParser.json());

// Enable CORS for all domains or specify for specific domains (e.g. frontend running on port 3000)
app.use(cors({
  origin: 'http://localhost:3000', // Frontend is running on port 3000
}));

// Setup for Nodemailer (Email setup with Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kalootmultimedia@gmail.com', // Replace with your Gmail email
    pass: 'stne nsxz ubdg gzpp',    // Use App Password (not your Gmail password)
  }
});

// POST route to receive form data
app.post('/send-email', (req, res) => {
  console.log(req.body); // بررسی داده‌ها
  const { name, phone, message } = req.body; 

  const mailOptions = {
    from: 'kalootmultimedia@gmail.com',
    to: 'kalootmultimedia@gmail.com',
    subject: 'پیام جدید از فرم مشاوره',
    text: `نام: ${name}\nشماره تماس: ${phone}\nپیام: ${message}`,
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'خطا در ارسال ایمیل' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'پیام با موفقیت ارسال شد' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
