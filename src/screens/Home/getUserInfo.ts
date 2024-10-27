import api from "@services/api";

export async function getUserInfo() {
  try {
    const response = api.get("/v1/users/infos");
    
    return response;
  } catch (error) {
    throw error
  }
}