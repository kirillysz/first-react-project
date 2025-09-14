import { useState } from "react";
import { loginUser } from "./api/auth.js";


export function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser(username, password);
            console.log("Успешно вошел:", data);
            onLogin();
        } catch (error) {
            console.error("Ошибка:", error);
            setError(error.message);
        }
    };

    return (
        <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-center">Логин</h2>
            <div className="flex flex-col">
                <label htmlFor="username" className="text-sm font-medium mb-1">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
            <div style={{ color: "blue", marginBottom: "10px" }}>token here</div>

            <button type="submit" 
            className="w-full py-2 rounded-lg bg-blue-900 text-white font-medium hover:bg-blue-700 transition">Submit</button>
        </form>
    );
}