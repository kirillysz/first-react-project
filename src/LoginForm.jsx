import { useState } from "react";
import { loginUser } from "./api/auth.jsx";

export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser(username, password);
            console.log("Успешно вошел:", data);
            setToken(data.access_token);

        } catch (error) {
            console.error("Ошибка:", error);
            setError(error.message);
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
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
            {token && <div style={{ color: "blue", marginBottom: "10px" }}>{token}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}