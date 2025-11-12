# Task Management API (Backend)

A Node.js/Express REST API for a full-stack Task Management application. Provides user authentication (JWT), CRUD operations for tasks, and MongoDB Atlas integration.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Express Validator** for input validation

## Features
- User registration and login
- JWT-based authentication
- Create, read, update, delete tasks
- User-specific task management
- Input validation and error handling

## API Endpoints

### Authentication
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — User login

### Tasks (Protected)
- `GET /api/tasks` — Get all user tasks
- `POST /api/tasks` — Create new task
- `PUT /api/tasks/:id` — Update task
- `DELETE /api/tasks/:id` — Delete task

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   - Copy `.env.example` to `.env` and fill in your values (do not commit `.env`):

     ```text
     MONGODB_URI=your_connection_string
     PORT=5000
     JWT_SECRET=your_jwt_secret
     ```

4. Start the server
   ```bash
   npm start    # if package.json has a start script
   # or
   node server.js
   ```

5. Quick test
   - Visit the health check in your browser: http://localhost:5000

## Deployment
- Deploy on  [Render](https://render.com)
- Set environment variables in the cloud dashboard.
- Use `0.0.0.0/0` in MongoDB Atlas IP whitelist for public cloud access.

Notes for production
- Never use `0.0.0.0/0` for long-term production access — prefer specific IPs or VPC/Private Endpoints.
- Store secrets in the cloud provider's secrets manager and set them as environment variables in your deployment service.

## Project structure
```
├── middleware/      # JWT authentication middleware
├── models/          # Mongoose schemas (User, Task)
├── routes/          # API route handlers (auth, tasks)
├── .env             # Environment variables (do NOT commit)
├── server.js        # Application entry point
└── package.json     # Dependencies and scripts
```

## Author
Lakshmi — Full Stack Developer

## Usage example

Simple curl example to sign up a user:

```bash
curl -X POST http://localhost:5000/api/auth/signup \
   -H 'Content-Type: application/json' \
   -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

## Security
Do NOT commit `.env` or any secret keys. `.env` is included in `.gitignore`. If you accidentally expose credentials, rotate them immediately (e.g., change the MongoDB user password in Atlas).

## License
This project is provided under the MIT License. See `LICENSE` for details.
