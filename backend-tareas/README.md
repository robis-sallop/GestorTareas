# Node.js Express MongoDB REST API

This project is a REST API built with Node.js and Express.js, designed to manage tasks stored in a MongoDB database. The API allows for creating, listing, editing, deleting, and retrieving task details.

## Project Structure

```
node-express-mongo-rest-api
├── src
│   ├── controllers
│   │   └── tareasController.js
│   ├── models
│   │   └── tarea.js
│   ├── routes
│   │   └── tareas.js
│   ├── config
│   │   └── db.js
│   └── app.js
├── package.json
└── README.md
```

## Setup Instructions

1. **Ensure MongoDB is running locally.**
   - Make sure you have MongoDB installed and running on your machine. The database name should be `dbtareas`, and you should have a user with the username `admin` and password `admin`.

2. **Navigate to the project directory in the terminal.**
   ```bash
   cd node-express-mongo-rest-api
   ```

3. **Install the required dependencies.**
   ```bash
   npm install
   ```

4. **Start the server.**
   ```bash
   node src/app.js
   ```

## API Usage

Once the server is running, you can use a tool like Postman or curl to interact with the API. The following endpoints are available:

- **Create a Task**
  - `POST /tareas`
  - Body: `{ "title": "Task Title", "details": "Task Details", "status": "pending" }`

- **List Tasks**
  - `GET /tareas`

- **Edit a Task**
  - `PUT /tareas/:id`
  - Body: `{ "title": "Updated Title", "details": "Updated Details", "status": "completed" }`

- **Delete a Task**
  - `DELETE /tareas/:id`

- **Get Task Details**
  - `GET /tareas/:id`

## Testing the API

To test the REST API, follow these steps:

1. Ensure MongoDB is running locally.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Start the server with `node src/app.js`.
5. Use a tool like Postman or curl to send HTTP requests to the API endpoints for creating, listing, editing, deleting, and retrieving tasks.