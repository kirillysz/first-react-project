import { useState } from "react";
import { loginUser } from "./api/auth.jsx";

export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(username, password);
            console.log("Успешно вошел:", data);

        } catch (error) {
            if (error instanceof Response) {
                // ошибка от fetch
                const errData = await error.json().catch(() => ({}));
                console.error("Ошибка сервера:", errData);
            } else {
                console.error("Ошибка:", error);
            }
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}