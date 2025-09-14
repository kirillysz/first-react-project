import axios from "axios";

export async function fetchTasks() {
    try {
        const response = await axios.get("http://localhost:8000/tasks/", { withCredentials: true });
        return response.data;
    }
    catch (error) {
        console.error("Ошибка при получении задач:", error);
        throw error;
    }
}

export async function createTask(title, description, completed = false) {
    try {
        const response = await axios.post(
            "http://localhost:8000/tasks/create/",
            { title, description, completed },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        );
        return response.data;

    } catch (error) {
        console.error("Ошибка при создании задачи:", error);
        throw error;
    }
}
