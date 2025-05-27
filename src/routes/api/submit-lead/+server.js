import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, businessName, email } = body;
    
    // Just log and return success - no email yet
    console.log('Form submitted:', { name, businessName, email });
    
    return json({ 
      message: 'Form received successfully',
      success: true 
    });
    
  } catch (error) {
    console.error('Basic error:', error.message);
    return json({ 
      message: 'Basic error occurred',
      error: error.message
    }, { status: 500 });
  }
}