import nodemailer from 'nodemailer';

export default async function handler(req, res){
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address to receive the contact form submissions
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from your website contact form.</p>
             <p><strong>Name: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Message: </strong> ${message}</p>`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
