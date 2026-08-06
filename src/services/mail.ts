export const API_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API_URL || 'https://eq3tqsvcw7.execute-api.ap-south-1.amazonaws.com';

export interface SendMailRequest {
  to_mails: string[];
  Subject: string;
  Body: string;
  cc_mails?: string[];
}

export interface SendMailResponse {
  success: boolean;
  message: string;
}

export const mailService = {
  /**
   * Send a general email
   * @param payload Request body containing to_mails, Subject, Body, and optional cc_mails
   * @returns SendMailResponse
   */
  async sendMail(payload: SendMailRequest): Promise<SendMailResponse> {
    const response = await fetch(`${API_BASE_URL}/mail/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email. Status: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
};
