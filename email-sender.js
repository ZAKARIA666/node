const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server
  port: 587, // Replace with the SMTP port
  secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
  auth: {
    user: 'your-email@example.com', // Replace with your email address
    pass: 'your-password', // Replace with your email password or app password
  },
});

// Email message details
const mailOptions = {
  from: 'your-email@example.com', // Replace with your email address
  to: 'your-email@example.com', // Replace with the recipient's email address
  subject: 'Test Email', // Replace with the email subject
  text: 'This is a test email sent from Node.js using nodemailer.', // Replace with the email body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  }
});
