import api_emails from "@services/emailsApi";
import api from "@services/api";

export const reSendEmail = async (
  email: string,
) => {
  
  try {

    const response = await api_emails.post('/v1/auth/resend_credential_email', {user: {email: email}});
    return response;

  } catch (error) {
    throw error;
  }
 }