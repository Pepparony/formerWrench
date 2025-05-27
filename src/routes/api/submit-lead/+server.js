import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    console.log('API route hit!');
    
    const body = await request.json();
    const { name, businessName, email } = body;
    
    // Validation
    if (!name || !businessName || !email) {
      return json({ 
        error: 'Missing required fields',
        message: 'Name, business name, and email are required' 
      }, { status: 400 });
    }

    console.log(`Processing lead: ${name}, ${businessName}, ${email}`);
    
    // Try to send emails with detailed debugging
    try {
      console.log('About to attempt sending emails...');
      await sendEmails(name, businessName, email);
      console.log('Email sending completed successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      console.error('Email error details:', emailError.message);
      
      // Still return success so form works, but log the email failure
      return json({ 
        message: 'Form submitted successfully, but email delivery failed',
        success: true,
        emailError: emailError.message
      });
    }
    
    return json({ 
      message: 'Lead processed successfully with emails sent!',
      success: true 
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return json({ 
      message: 'Error processing lead submission',
      error: error.toString()
    }, { status: 500 });
  }
}

async function sendEmails(name, businessName, email) {
  console.log('Starting email sending process...');
  
  // Import nodemailer
  const nodemailer = await import('nodemailer');
  console.log('Nodemailer imported successfully');
  
  // Create transporter
  console.log('Creating email transporter...');
  const transporter = nodemailer.default.createTransporter({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'holdengerlach23@gmail.com',
      pass: 'awftcdalqifjxbkn'
    }
  });
  
  console.log('Transporter created, testing connection...');
  
  // Test the connection
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
  } catch (verifyError) {
    console.error('SMTP connection failed:', verifyError);
    throw new Error(`SMTP connection failed: ${verifyError.message}`);
  }

  // Send welcome email to lead
  console.log(`Sending welcome email to: ${email}`);
  try {
    const welcomeResult = await transporter.sendMail({
      from: 'holdengerlach23@gmail.com',
      to: email,
      subject: '🔧 Your free mobile mechanic training is ready!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Thanks ${name}!</h1>
          <p>Here's your training video: <a href="https://youtu.be/dQw4w9WgXcQ">Watch Now</a></p>
          <p>Best, Holden<br>Former Wrench Marketing</p>
        </div>
      `
    });
    console.log('Welcome email sent successfully:', welcomeResult.messageId);
  } catch (welcomeError) {
    console.error('Welcome email failed:', welcomeError);
    throw welcomeError;
  }

  // Send notification email to you
  console.log('Sending notification email to holdengerlach23@gmail.com');
  try {
    const notificationResult = await transporter.sendMail({
      from: 'holdengerlach23@gmail.com',
      to: 'holdengerlach23@gmail.com',
      subject: '🔧 NEW LEAD - Former Wrench Marketing',
      html: `
        <h2>New Lead!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    });
    console.log('Notification email sent successfully:', notificationResult.messageId);
  } catch (notificationError) {
    console.error('Notification email failed:', notificationError);
    throw notificationError;
  }
  
  console.log('All emails sent successfully!');
}