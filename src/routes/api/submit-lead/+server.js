import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, businessName, email } = body;
    
    console.log('Form submitted:', { name, businessName, email });
    
    // Try to send email
    console.log('Attempting to send email...');
    try {
      await sendSimpleEmail(name, businessName, email);
      console.log('Email sent successfully!');
    } catch (emailError) {
      console.error('Email failed:', emailError.message);
      console.error('Email error details:', emailError);
      // Don't fail the whole request if email fails
    }
    
    return json({ 
      message: 'Form received successfully',
      success: true 
    });
    
  } catch (error) {
    console.error('API error:', error.message);
    return json({ 
      message: 'API error occurred',
      error: error.message
    }, { status: 500 });
  }
}

async function sendSimpleEmail(name, businessName, email) {
  console.log('Starting email send process...');
  
  // Import nodemailer
  const nodemailer = await import('nodemailer');
  console.log('Nodemailer imported');
  
  // Create transporter
  const transporter = nodemailer.default.createTransporter({
    service: 'gmail',
    auth: {
      user: 'holdengerlach23@gmail.com',
      pass: 'awftcdalqifjxbkn'
    }
  });
  console.log('Transporter created');

  // Test connection first
  console.log('Testing SMTP connection...');
  await transporter.verify();
  console.log('SMTP connection verified');

  // Send notification email to you
  console.log('Sending notification email...');
  const result = await transporter.sendMail({
    from: 'holdengerlach23@gmail.com',
    to: 'holdengerlach23@gmail.com',
    subject: '🔧 NEW LEAD - Former Wrench Marketing',
    html: `
      <h2>New Lead Alert!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${businessName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `
  });
  console.log('Notification email sent, Message ID:', result.messageId);

  // Send welcome email to lead
  console.log('Sending welcome email to lead...');
  const welcomeResult = await transporter.sendMail({
    from: 'holdengerlach23@gmail.com',
    to: email,
    subject: '🔧 Your free mobile mechanic training is ready!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #eab308; height: 5px;"></div>
        
        <div style="padding: 30px;">
          <h1 style="color: #1f2937; margin-bottom: 20px;">Thanks for downloading the training, ${name}!</h1>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Here's your free training video: <strong>"How I went from 3 jobs/week to fully booked using 4 simple strategies"</strong>
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://youtu.be/dQw4w9WgXcQ" 
               style="background-color: #eab308; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Watch Training Now
            </a>
          </div>
          
          <p style="color: #374151; font-size: 14px; line-height: 1.6;">
            <strong>What you'll learn:</strong><br>
            • The exact referral system that tripled my word-of-mouth<br>
            • How to set up your Google Business Profile in 10 minutes<br>
            • Customer follow-up scripts that actually work<br>
            • The pricing strategy that doubled my income
          </p>
          
          <p style="color: #374151; font-size: 14px;">
            Best,<br>
            Holden<br>
            Former Wrench Marketing
          </p>
        </div>
        
        <div style="background-color: #eab308; height: 5px;"></div>
      </div>
    `
  });
  console.log('Welcome email sent, Message ID:', welcomeResult.messageId);
  
  console.log('All emails sent successfully!');
}