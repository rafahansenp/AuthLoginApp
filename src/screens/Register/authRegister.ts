import api from "@services/api";

export const authRegister = async (
  username: string,
  email: string,
  password: string
) => {
  
  const user = {
      username,
      email,
      password
    }
  
  try {

    const response = await api.post('/v1/auth/sign_up', { user });
    return response;

  } catch (error) {
    throw error;
  }
 }