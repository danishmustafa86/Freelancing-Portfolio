const API_BASE_URL = 'http://localhost:3001/api';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};