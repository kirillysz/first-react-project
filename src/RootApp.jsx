import { useState } from "react";
import { RegisterForm } from "./RegisterForm.jsx";
import { LoginForm } from "./LoginForm.jsx";

export function RootApp() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gray-500">
      <div className="w-80 p-6 bg-white rounded-2xl shadow-md">
        {showLogin ? <LoginForm /> : <RegisterForm />}

        <button
          onClick={() => setShowLogin(!showLogin)}
          className="mt-3 w-full py-2 rounded-xl bg-blue-900 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          {showLogin ? "Перейти к регистрации" : "Перейти к входу"}
        </button>

        <div id="error-message" className="mt-4 text-red-500 text-sm"></div>
      </div>
    </div>
  );
}