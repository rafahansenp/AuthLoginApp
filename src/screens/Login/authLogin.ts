import api from "@services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TOKEN } from "@storage/storageConfig";

export const authLogin = async (email: string, password: string) => {
  
    const user = {
      email,
      password
    }
  
  try {

    const response = await api.put('/v1/auth/sign_in', { user })
    const { token, user: userId, success } = response.data
    
    await AsyncStorage.setItem(USER_TOKEN, token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    return success;
  } catch (error) {
    throw error;
  }
 }