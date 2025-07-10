# AuthAPI

A simple Node.js authentication API using Express, bcryptjs, and JWT.

## Setup

1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node index.js
   ```

The server will run on [http://localhost:4000](http://localhost:4000).

## Endpoints

### Register
- **POST** `/register`
- Body: `{ "username": "yourname", "password": "yourpassword" }`
- Response: `201 Created` on success

### Login
- **POST** `/login`
- Body: `{ "username": "yourname", "password": "yourpassword" }`
- Response: `{ "token": "<JWT token>" }` on success

### Protected Profile
- **GET** `/profile`
- Header: `Authorization: Bearer <token>`
- Response: `{ "message": "Hello, <username>" }` if token is valid

## Notes
- This uses in-memory storage for users (resets on server restart).
- Change `JWT_SECRET` in `index.js` for production use. 