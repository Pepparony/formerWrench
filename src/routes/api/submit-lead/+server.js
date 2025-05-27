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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ 
        error: 'Invalid email format',
        message: 'Please provide a valid email address' 
      }, { status: 400 });
    }
    
    console.log(`Processing lead: ${name}, ${businessName}, ${email}`);
    
    // Try to send emails
    try {
      await sendEmails(name, businessName, email);
      console.log('Emails sent successfully');
    } catch (emailError) {
      console.error('Email error (but continuing):', emailError);
      // Don't fail the request if email fails
    }
    
    return json({ 
      message: 'Lead processed successfully!',
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
  // Dynamic import to avoid build issues
  const nodemailer = await import('nodemailer');
  
  const transporter = nodemailer.default.createTransporter({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'holdengerlach23@gmail.com',
      pass: 'awftcdalqifjxbkn'
    }
  });

  // Send welcome email
  await transporter.sendMail({
    to: email,
    subject: '🔧 Your free mobile mechanic training is ready!',
    html: `
      <h1>Thanks ${name}!</h1>
      <p>Here's your training video: <a href="https://youtu.be/dQw4w9WgXcQ">Watch Now</a></p>
      <p>Best, Holden</p>
    `
  });

  // Send notification
  await transporter.sendMail({
    to: "holdengerlach23@gmail.com",
    subject: '🔧 NEW LEAD - Former Wrench Marketing',
    html: `
      <h2>New Lead!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${businessName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `
  });
}