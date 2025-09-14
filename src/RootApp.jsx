import { useEffect, useState } from "react";

import { RegisterForm } from "./RegisterForm.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { Tasks } from "./Tasks.jsx";

import { checkAuth } from "./api/auth.js";

export function RootApp() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verified = async () => {
      try {
        await checkAuth();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    verified();
  }, []);

  if (loading) return <div className="text-center p-4">Проверка авторизации...</div>;

  return (
    <div className="min-h-screen w-full font-sans bg-gray-500">
      {isLoggedIn ? (
        <div className="w-full h-screen p-4 bg-gray-100 overflow-y-auto">
          <Tasks />
        </div>
      ) : (

        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
            {showLogin ? (
              <LoginForm onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <RegisterForm />
            )}

            <button
              onClick={() => setShowLogin(!showLogin)}
              className="mt-3 w-full py-2 rounded-xl bg-blue-900 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              {showLogin ? "Перейти к регистрации" : "Перейти к входу"}
            </button>

            <div id="error-message" className="mt-4 text-red-500 text-sm"></div>
          </div>
        </div>
      )}
    </div>
  );
}
