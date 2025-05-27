import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  console.log('=== API ROUTE HIT ===');
  
  try {
    const body = await request.json();
    console.log('Request body received:', JSON.stringify(body, null, 2));
    
    const { name, businessName, email } = body;
    console.log('Extracted data:', { name, businessName, email });
    
    // Validation
    if (!name || !businessName || !email) {
      console.log('Validation failed - missing fields');
      return json({ 
        error: 'Missing required fields',
        message: 'Name, business name, and email are required' 
      }, { status: 400 });
    }

    console.log('Validation passed');
    console.log('About to call sendEmails function...');
    
    // Call email function
    const emailResult = await sendEmails(name, businessName, email);
    console.log('sendEmails returned:', emailResult);
    
    console.log('=== API ROUTE COMPLETED SUCCESSFULLY ===');
    return json({ 
      message: 'Lead processed successfully!',
      success: true 
    });
    
  } catch (error) {
    console.error('=== API ROUTE ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return json({ 
      message: 'Error processing lead submission',
      error: error.toString()
    }, { status: 500 });
  }
}

async function sendEmails(name, businessName, email) {
  console.log('=== ENTERING sendEmails FUNCTION ===');
  console.log('Parameters:', { name, businessName, email });
  
  try {
    console.log('Step 1: Importing nodemailer...');
    const nodemailer = await import('nodemailer');
    console.log('Step 1: Nodemailer imported successfully');
    
    console.log('Step 2: Creating transporter...');
    const transporter = nodemailer.default.createTransporter({
      service: 'gmail',
      auth: {
        user: 'holdengerlach23@gmail.com',
        pass: 'awftcdalqifjxbkn'
      }
    });
    console.log('Step 2: Transporter created');
    
    console.log('Step 3: Testing SMTP connection...');
    await transporter.verify();
    console.log('Step 3: SMTP connection verified successfully');
    
    console.log('Step 4: Sending welcome email...');
    const welcomeResult = await transporter.sendMail({
      from: 'holdengerlach23@gmail.com',
      to: email,
      subject: 'Test Email - Former Wrench',
      html: `<h1>Test Email</h1><p>Hello ${name}!</p>`
    });
    console.log('Step 4: Welcome email sent, Message ID:', welcomeResult.messageId);
    
    console.log('Step 5: Sending notification email...');
    const notificationResult = await transporter.sendMail({
      from: 'holdengerlach23@gmail.com',
      to: 'holdengerlach23@gmail.com',
      subject: 'NEW LEAD TEST',
      html: `<h2>Test Lead</h2><p>Name: ${name}<br>Business: ${businessName}<br>Email: ${email}</p>`
    });
    console.log('Step 5: Notification email sent, Message ID:', notificationResult.messageId);
    
    console.log('=== sendEmails COMPLETED SUCCESSFULLY ===');
    return { success: true, welcomeId: welcomeResult.messageId, notificationId: notificationResult.messageId };
    
  } catch (emailError) {
    console.error('=== EMAIL ERROR ===');
    console.error('Email error details:', emailError);
    console.error('Email error message:', emailError.message);
    console.error('Email error code:', emailError.code);
    console.error('Email error stack:', emailError.stack);
    throw emailError;
  }
}