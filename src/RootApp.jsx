import { useState } from "react";
import { RegisterForm } from "./RegisterForm.jsx";
import { LoginForm } from "./LoginForm.jsx";

export function RootApp() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <LoginForm /> : <RegisterForm />}
      <button onClick={() => setShowLogin(!showLogin)} style={{ marginTop: "10px" }}>
        {showLogin ? "Перейти к регистрации" : "Перейти к входу"}
      </button>
      <div id="error-message" style={{ color: 'red', marginBottom: '40px' }}></div>
      <div id="token-message" style={{ color: "blue", marginBottom: '40px' }}></div>
    </div>
  );
}
