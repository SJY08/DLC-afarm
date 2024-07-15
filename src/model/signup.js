import axios from "axios";
import ip from "./ip";

export const registerUser = async (username, password) => {
  const signup = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post(`${ip}/register`, signup, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
