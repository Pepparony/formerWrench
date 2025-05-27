import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    const { name, businessName, email } = await request.json();
    
    // Validate required fields
    if (!name || !businessName || !email) {
      return json({ 
        error: 'Missing required fields',
        message: 'Name, business name, and email are required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ 
        error: 'Invalid email format',
        message: 'Please provide a valid email address' 
      }, { status: 400 });
    }
    
    console.log(`Processing lead: ${name}, ${businessName}, ${email}`);
    
    // Send emails
    await sendEmails(name, businessName, email);
    
    return json({ 
      message: 'Lead processed successfully!',
      success: true 
    });
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return json({ 
      message: 'Error processing lead submission',
      error: error.toString()
    }, { status: 500 });
  }
}

async function sendEmails(name, businessName, email) {
  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'holdengerlach23@gmail.com',
      pass: 'awftcdalqifjxbkn'
    }
  });

  try {
    // Send welcome email to lead
    await transporter.sendMail({
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

    // Send notification email to you
    await transporter.sendMail({
      to: "holdengerlach23@gmail.com",
      subject: '🔧 NEW LEAD - Former Wrench Marketing',
      html: `
        <h2 style="color: #1f2937;">New Mobile Mechanic Lead!</h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business:</strong> ${businessName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <p>Lead captured from www.formerwrench.com</p>
      `
    });
    
    console.log("Emails sent successfully");
  } catch (emailError) {
    console.error("Email sending failed:", emailError);
    // Don't fail the whole request if email fails
    throw new Error("Email delivery failed, but form was processed");
  }
}