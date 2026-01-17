// API endpoint for waitlist submissions
// This can be connected to your backend service (e.g., Supabase, Firebase, or custom API)

interface WaitlistSubmission {
  product: string;
  email: string;
  message?: string;
  timestamp: string;
}

export async function submitToWaitlist(data: WaitlistSubmission): Promise<boolean> {
  try {
    // Option 1: Send to your backend API
    // const response = await fetch('https://your-backend.com/api/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return response.ok;

    // Option 2: Send via email service (e.g., SendGrid, Resend, etc.)
    // await sendEmail({
    //   to: 'hello@arcnetlabs.com',
    //   subject: `Waitlist: ${data.product}`,
    //   html: `
    //     <h2>New Waitlist Signup</h2>
    //     <p><strong>Product:</strong> ${data.product}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
    //     <p><strong>Timestamp:</strong> ${data.timestamp}</p>
    //   `,
    // });

    // Option 3: Store locally (for development)
    console.log('Waitlist Submission:', data);
    
    // Store in localStorage for now
    const submissions = JSON.parse(localStorage.getItem('waitlist') || '[]');
    submissions.push(data);
    localStorage.setItem('waitlist', JSON.stringify(submissions));
    
    return true;
  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return false;
  }
}

// To retrieve submissions (for development/testing)
export function getWaitlistSubmissions(): WaitlistSubmission[] {
  try {
    return JSON.parse(localStorage.getItem('waitlist') || '[]');
  } catch {
    return [];
  }
}

// To export submissions as CSV
export function exportWaitlistAsCSV(): string {
  const submissions = getWaitlistSubmissions();
  if (submissions.length === 0) return '';
  
  const headers = ['Product', 'Email', 'Message', 'Timestamp'];
  const rows = submissions.map(s => [
    s.product,
    s.email,
    s.message || '',
    s.timestamp
  ]);
  
  return [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
}
