# React + Vite

Простой проект на React с интеграцией API (todolist\_back)

## Установка

### 1. Backend

```bash
git clone https://github.com/kirillysz/todolist_back.git
cd todolist_back
```

Создайте `.env` файл с содержимым:

```
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=dbname

SECRET_KEY=your_secret
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

Запустите бекенд:

```bash
docker compose up --build -d
```

### 2. Frontend

```bash
git clone https://github.com/kirillysz/first-react-project.git
cd first-react-project
docker compose up --build -d
```

После запуска фронт будет доступен по адресу: `http://localhost:5173`

### Дополнительно

* Для просмотра логов контейнеров:

```bash
docker compose logs -f
```

* Убедитесь, что переменная `VITE_API_URL` в фронтенде указывает на URL вашего бекенда.
