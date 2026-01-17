# Email Integration Guide for ArcnetLabs Website

## Overview
The website currently collects waitlist submissions and stores them in the browser's localStorage for development. To enable proper email notifications, you need to connect a backend email service.

## Current Status
✅ Waitlist forms are working
✅ Data is stored in localStorage (viewable in browser DevTools)
✅ Toast notifications confirm successful submissions
❌ Email notifications not yet configured (requires backend setup)

## Stored Data
Waitlist submissions include:
- Product name (ChessIQ, Journi, or Scoutly)
- Email address
- Optional message
- Timestamp

## How to View Submissions (Development)
Open browser console and run:
```javascript
JSON.parse(localStorage.getItem('waitlist'))
```

Or export as CSV:
```javascript
// In browser console
import('/src/api/waitlist.ts').then(m => console.log(m.exportWaitlistAsCSV()))
```

## Setting Up Email Notifications

### Option 1: Use a Backend API
1. Create an API endpoint at `/api/waitlist`
2. Update `src/api/waitlist.ts` to call your endpoint
3. Example backend technologies:
   - Node.js + Express
   - Python + FastAPI
   - Serverless Functions (Vercel, Netlify, AWS Lambda)

### Option 2: Use an Email Service Directly
Popular services:
- **Resend** (recommended, developer-friendly)
  ```bash
  npm install resend
  ```
  
- **SendGrid**
  ```bash
  npm install @sendgrid/mail
  ```

- **Mailgun**
- **AWS SES**

### Option 3: Use a Form Service
No-code solutions:
- **Formspree** - https://formspree.io
- **Form submit** - https://formsubmit.co  
- **Basin** - https://usebasin.com

### Implementation Example (Resend)

1. Install Resend:
```bash
npm install resend
```

2. Create API route (e.g., using Next.js API routes or serverless function):
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { product, email, message, timestamp } = await request.json();

  await resend.emails.send({
    from: 'waitlist@arcnetlabs.com',
    to: 'hello@arcnetlabs.com',
    subject: `New Waitlist Signup: ${product}`,
    html: `
      <h2>New Waitlist Signup</h2>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
      <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
    `
  });

  return Response.json({ success: true });
}
```

3. Update `src/api/waitlist.ts`:
```typescript
export async function submitToWaitlist(data: WaitlistSubmission): Promise<boolean> {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return false;
  }
}
```

## Environment Variables
Add to `.env`:
```env
# For Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# For SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Notification email
NOTIFICATION_EMAIL=hello@arcnetlabs.com
```

## Testing
1. Fill out a waitlist form on the website
2. Check browser console for submission logs
3. Verify email was received at the notification address
4. Check toast notification appears on submission

## Production Checklist
- [ ] Set up email service (Resend/SendGrid/etc.)
- [ ] Configure environment variables
- [ ] Test email delivery
- [ ] Add email address validation
- [ ] Set up email templates
- [ ] Add auto-reply to users
- [ ] Monitor email delivery rates
- [ ] Set up error logging
- [ ] Consider adding CAPTCHA for spam prevention

## Contact Form (Business Card)
The "Get in Touch" button displays a business card PDF with contact information. This provides:
- Professional presentation
- Multiple contact methods
- Brand consistency

To update the business card:
1. Replace `src/assets/images/stationery/business card 1 back.pdf`
2. Ensure the file maintains the same name or update the import in `ContactSection.tsx`

## Support
For questions about email integration, contact the development team.
