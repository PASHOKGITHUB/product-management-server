# SuperLabs Product Management API

A robust RESTful API built with Node.js, Express, and PostgreSQL (via Prisma ORM) for managing premium tech products.

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete products.
- **Advanced Search**: Search products by name, ID, or SKU with support for partial matches.
- **Pagination**: Efficiently handle large datasets with built-in pagination support.
- **API Documentation**: Interactive Swagger/OpenAPI documentation.
- **Type Safety**: Fully implemented in TypeScript for reliability.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Documentation**: Swagger UI / OpenAPI 3.0

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL instance

### Installation

1. Clone the repository and navigate to the server directory:
   ```bash
   cd product-management-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file based on `.env.example`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/product_db"
   PORT=5000
   ```

4. Database Setup:
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```

5. Run the Application:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/products`: List all products (supports `q`, `page`, `limit` params)
- `GET /api/products/:id`: Get product by ID, SKU, or Name
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update an existing product
- `DELETE /api/products/:id`: Delete a product

### Documentation

Interactive API documentation is available at `http://localhost:5000/api/docs` when the server is running.
