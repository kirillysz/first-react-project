import { useState, useEffect } from "react";
import { fetchTasks } from "./api/tasks.js";

export function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                console.log("🔵 Компонент Tasks монтирован");
                console.log("🔄 Начинаю загрузку задач...");
                
                const data = await fetchTasks();
                setTasks(data);
                console.log("✅ Задачи успешно загружены:", data);
                
            } catch (err) {
                console.error("❌ Ошибка в loadTasks:", err);
                setError("Ошибка загрузки задач: " + (err.message || "неизвестная ошибка"));
            } finally {
                setLoading(false);
            }
        };

        loadTasks();
    }, []);

    console.log("🔄 Рендер компонента Tasks, loading:", loading);

    if (loading) return <div className="text-center">Загрузка задач...</div>;
    
    return (
        <div className="w-full h-screen p-4 overflow-y-auto bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Задачи</h2>
            {error && (
                <div className="text-red-500 mb-2 p-2 bg-red-100 rounded">
                    {error}
                </div>
            )}
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id} className="border p-4 rounded bg-white shadow">
                        <h3 className="font-semibold text-lg">{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.completed ? "Выполнено" : "В процессе"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}