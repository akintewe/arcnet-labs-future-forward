// API function to submit contact form to Zoho CRM via Netlify Function

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
  zohoId?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  try {
    // Determine the API endpoint based on environment
    const apiUrl = import.meta.env.PROD
      ? '/.netlify/functions/submit-contact-resend' // Production: Netlify function
      : 'http://localhost:8888/.netlify/functions/submit-contact-resend'; // Local development

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error.message || 'Failed to submit contact form. Please try again.',
    };
  }
}
