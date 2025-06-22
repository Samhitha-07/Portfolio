import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';

// Load environment variables with explicit path
dotenv.config({ path: '.env' });

// Verify environment variables are loaded
console.log("Checking environment variables...");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? " Loaded" : " Missing");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? " Loaded" : " Missing");
console.log("PORT:", process.env.PORT || 5000);

// Exit if credentials are missing
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Critical: Email credentials missing in .env file");
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 5000;

// Enhanced CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://portfolio-5k3f.vercel.app',
  'https://portfolio-new-git-master-samhitha-07s-projects.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));

app.use(bodyParser.json());

// Email transporter setup with verification
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter connection
transporter.verify((error) => {
  if (error) {
    console.error(' Mail transporter verification failed:', error);
  } else {
    console.log('Mail transporter is ready');
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  console.log("Received contact form submission:", req.body);
  
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Message Sent!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Error sending message',
      error: error.message 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`\n Server running at http://localhost:${port}`);
  console.log(`Configured to send emails from: ${process.env.EMAIL_USER}`);
});