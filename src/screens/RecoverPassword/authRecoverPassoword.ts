
import api_emails from "@services/emailsApi";
import api from "@services/api";

export const authRecoverPassword = async (
  email: string,
) => {

  try {

    const response = await api_emails.post('/v1/auth/recover_password', { user: { email: email } });
    return response;

  } catch (error) {
    throw error;
  }
 }