// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000; // match your frontend

app.use(cors());
app.use(bodyParser.json());

// Create transporter (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // your gmail address
    pass: process.env.EMAIL_PASS,  // your app password (not your normal gmail password!)
  },
});

// Routes
app.get('/', (req, res) => { 
    res.send('Server is running!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Check if required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const mailOptions = {
    from: email, // sender
    to: process.env.EMAIL_USER, // your email address
    subject: 'New Contact Form Message', // default subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // the body of the email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Message Sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending message. Please try again.' });
  }
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
