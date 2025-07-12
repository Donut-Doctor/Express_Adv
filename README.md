Express Server

A simple blogging platform backend built with **Express.js** and **MongoDB**.

---

## Features

- REST API for blog posts (`/posts`)
- File upload support (`/upload`)
- Third-party API integration:
  - Random quotes (`/quote`)
  - Jokes (`/quote/joke`)
  - Weather by city (`/quote/weather/:city`)
- Centralized error handling
- MongoDB with Mongoose
- Request logging middleware
- Postman collection included

---

## Setup

1. **Install dependencies**

```bash
npm install

Start the server
node server.js

API Endpoints
Method	Route	Description
GET	/	Home
GET	/about	
POST	/upload	Upload a file (form-data)
POST	/upload/multiple	Upload multiple files
POST	/posts	Create a post (JSON)
GET	/posts	Get all posts
GET	/quote	Get a random quote
GET	/quote/joke	Get a random joke
GET	/quote/weather/:city	Get weather info by city

Postman Collection
Import this file in Postman to test all endpoints:
postman_collection.json
