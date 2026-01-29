import { Handler } from '@netlify/functions';

interface WaitlistFormData {
  product: string;
  email: string;
  message?: string;
  timestamp: string;
}

// Netlify Function Handler for Waitlist via Resend
export const handler: Handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse form data
    const formData: WaitlistFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.product || !formData.email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Get Resend API key from environment
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@arcnetlabs.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Arcnet Labs Waitlist <${fromEmail}>`,
        to: [notificationEmail],
        replyTo: formData.email,
        subject: `New Waitlist Signup: ${formData.product}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #667eea; }
                .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                .product-badge { display: inline-block; background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Waitlist Signup</h2>
                  <span class="product-badge">${formData.product}</span>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Product:</div>
                    <div class="value">${formData.product}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${formData.email}</div>
                  </div>
                  ${formData.message ? `
                  <div class="field">
                    <div class="label">Interest/Message:</div>
                    <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
                  </div>
                  ` : ''}
                  <div class="footer">
                    <p>Submitted on: ${formData.timestamp || new Date().toLocaleString()}</p>
                    <p>Reply directly to this email to respond to the user.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
New Waitlist Signup

Product: ${formData.product}
Email: ${formData.email}
${formData.message ? `Interest/Message: ${formData.message}\n` : ''}
Submitted on: ${formData.timestamp || new Date().toLocaleString()}
        `.trim(),
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const emailResult = await emailResponse.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Waitlist signup submitted successfully',
        emailId: emailResult.id,
      }),
    };
  } catch (error: any) {
    console.error('Error processing waitlist signup:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
      }),
    };
  }
};
