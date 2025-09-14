import axios from "axios";

export async function registerUser(username, password) {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || "Ошибка при отправке данных");
    }
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const formData = new URLSearchParams();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);

    const response = await axios.post(
      "http://localhost:8000/auth/login",
      formData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail || "Ошибка при отправке данных");
    }
    throw error;
  }
}
