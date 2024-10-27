import axios from "axios";
import { APP_API } from "@env";

const api = axios.create({
  baseURL: `${APP_API}`,
});

export default api