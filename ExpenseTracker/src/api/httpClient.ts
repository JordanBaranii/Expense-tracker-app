import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API_V2_ENDPOINT } from "../utils/constants";

export const httpV2 = axios.create({
  baseURL: BASE_API_V2_ENDPOINT,
});

// Add token to every request
httpV2.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const updateAuthToken = (token: string | null) => {
  httpV2.defaults.headers.Authorization = token ? `Bearer ${token}` : "";
};

export const clearAuthToken = () => {
  httpV2.defaults.headers.common["Authorization"] = "";
};
