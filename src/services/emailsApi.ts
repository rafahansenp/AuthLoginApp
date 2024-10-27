import axios from "axios";
import { APP_API } from "@env";
import { APP_API_EMAILS } from "@env";

const api_emails = axios.create({
  baseURL: `${APP_API}`,
  url: `${APP_API_EMAILS}`
});


export default api_emails;