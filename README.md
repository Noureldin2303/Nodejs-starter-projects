# Project Overview

This repository contains three separate Node.js starter applications: JobAPI, storeApi, and Task-Manager. Each application is designed to help you quickly get started with common backend functionalities, including user authentication, product management, and task management. These applications come with predefined APIs, routes, and database schemas, making it easier for you to focus on building your features.

## Table of Contents

- [JobAPI](#jobapi)
  - [File Structure](#jobapi-file-structure)
  - [APIs and Routes](#jobapi-apis-and-routes)
  - [Database Schemas](#jobapi-database-schemas)
- [storeApi](#storeapi)
  - [File Structure](#storeapi-file-structure)
  - [APIs and Routes](#storeapi-apis-and-routes)
  - [Database Schemas](#storeapi-database-schemas)
- [Task-Manager](#task-manager)
  - [File Structure](#task-manager-file-structure)
  - [APIs and Routes](#task-manager-apis-and-routes)
  - [Database Schemas](#task-manager-database-schemas)

## Technologies Used

Each application in this repository utilizes a variety of technologies and libraries:

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Tokens for authentication.
- **dotenv**: Module to load environment variables.
- **bcryptjs**: Library to hash passwords.
- **Jest**: Testing framework for JavaScript.
- **Supertest**: Library for testing HTTP.

Additional technologies and libraries may be used within each specific application.

## JobAPI

### File Structure

```
JobAPI/
  ├── .env
  ├── .gitignore
  ├── app.js
  ├── controllers/
  │   ├── auth.js
  │   └── jobs.js
  ├── db/
  │   └── connect.js
  ├── errors/
  │   ├── bad-request.js
  │   ├── custom-api.js
  │   ├── index.js
  │   └── unauthenticated.js
  ├── middlewares/
  │   └── authentication.js
  ├── models/
  ├── routes/
  │   ├── jobs.js
  │   └── user.js
  ├── package.json
  └── README.md
```

### APIs and Routes

- **Authentication Routes**
  - `POST /api/v1/auth/register` - Register a new user
  - `POST /api/v1/auth/login` - Login a user

- **Job Routes**
  - `GET /api/v1/jobs` - Get all jobs
  - `POST /api/v1/jobs` - Create a new job
  - `GET /api/v1/jobs/:id` - Get a job by ID
  - `PATCH /api/v1/jobs/:id` - Update a job by ID
  - `DELETE /api/v1/jobs/:id` - Delete a job by ID

### Database Schemas

- **User Schema** (in `models/user.js`)
- **Job Schema** (in `models/job.js`)

## storeApi

### File Structure

```
storeApi/
  ├── .env
  ├── .gitignore
  ├── app.js
  ├── controllers/
  ├── db/
  ├── faker.js
  ├── middlewares/
  │   ├── not-found.js
  │   └── error-handler.js
  ├── models/
  ├── package.json
  ├── populate.js
  ├── products.json
  ├── routes/
  │   └── products.js
  └── README.md
```

### APIs and Routes

- **Product Routes**
  - `GET /api/v1/products` - Get all products
  - `POST /api/v1/products` - Create a new product
  - `GET /api/v1/products/:id` - Get a product by ID
  - `PATCH /api/v1/products/:id` - Update a product by ID
  - `DELETE /api/v1/products/:id` - Delete a product by ID

### Database Schemas

- **Product Schema** (in `models/product.js`)

## Task-Manager

### File Structure

```
Task-Manager/
  ├── .env
  ├── .gitignore
  ├── controllers/
  │   └── task.js
  ├── db/
  │   └── connection.js
  ├── errors/
  │   ├── bad-request.js
  │   ├── custom-error.js
  │   ├── index.js
  │   └── unauthenticated.js
  ├── index.js
  ├── middlewares/
  │   ├── async.js
  │   ├── not-found.js
  │   └── error-handler.js
  ├── models/
  │   └── Task.js
  ├── package.json
  ├── routes/
  │   └── task.js
  └── README.md
```

### APIs and Routes

- **Task Routes**
  - `GET /api/tasks` - Get all tasks
  - `POST /api/tasks` - Create a new task
  - `GET /api/tasks/:id` - Get a task by ID
  - `PATCH /api/tasks/:id` - Update a task by ID
  - `DELETE /api/tasks/:id` - Delete a task by ID

### Database Schemas

- **Task Schema** (in `models/Task.js`)

## Getting Started

To get started with any of these projects, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Create a `.env` file and add the necessary environment variables.
5. Start the server using `npm start`.

## License

This project is licensed under the MIT License.
