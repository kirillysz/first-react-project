import { useState } from "react";
import { registerUser } from "./api/auth.jsx";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Пароль должен быть не менее 6 символов");
      return;
    }

    try {
      const data = await registerUser(username, password);
      console.log("Успешно зарегистрирован:", data);
      setError("");

    } catch (err) {
      console.error("Ошибка:", err);
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold text-center">Регистрация</h2>

      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-medium mb-1">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium mb-1">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="passwordRepeat" className="text-sm font-medium mb-1">Repeat Password:</label>
        <input
          type="password"
          id="passwordRepeat"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      <div className="text-blue-500 text-sm mt-1">token here</div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
