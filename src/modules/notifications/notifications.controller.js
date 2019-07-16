import { Client } from 'postmark';

export const sendEmail = async (recepient, subject, message) => {
  try {
    const client = new Client('fe1f6bb9-aee7-4a25-bd58-1067441563db');
    client.sendEmail({
      From: 'charles@vendyads.com',
      To: recepient,
      Subject: subject,
      TextBody: message,
    });
    return true;
  } catch (e) {
    return false;
  }
};
