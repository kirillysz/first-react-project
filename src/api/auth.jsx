export async function registerUser(username, password) {
  const response = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),

  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Ошибка при отправке данных");
  }

  const data = await response.json();
  document.cookie = `access_token=${data.access_token}; path=/; max-age=3600`;
  return data;
}


export async function loginUser(username, password) {
  const formData = new URLSearchParams();

  formData.append("grant_type", "password");
  formData.append("username", username);
  formData.append("password", password);


  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
    credentials: "include", 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Ошибка при отправке данных");
  }

  const data = await response.json();
  document.cookie = `access_token=${data.access_token}; path=/; max-age=3600`;
  return data;
}