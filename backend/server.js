
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000', 
}));


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kalootmultimedia@gmail.com',
    pass: 'stne nsxz ubdg gzpp',
  }
});


app.post('/send-email', (req, res) => {
  console.log(req.body);
  const { name, phone, message } = req.body; 

  const mailOptions = {
    from: 'kalootmultimedia@gmail.com',
    to: 'kalootmultimedia@gmail.com',
    subject: 'پیام جدید از فرم مشاوره',
    text: `نام: ${name}\nشماره تماس: ${phone}\nپیام: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'خطا در ارسال ایمیل' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'پیام با موفقیت ارسال شد' });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
