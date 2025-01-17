# Library Management System

## Description

This is a Library Management System that allows for the management of books, authors, and members. The system supports functionalities such as adding, updating, deleting books/authors, registering members, borrowing and returning books, and tracking overdue books.

## Features

- Add, update, and delete books and authors.
- Register members and allow them to borrow books.
- Track borrowed books and return deadlines.
- View overdue books for a specific member.

## Tech Stack

- Backend: Node.js (Express)
- Database: Sequelize (MySQL)
- Testing: Postman

## Database Setup

The database schema and tables structure are included in the `{docs/database}` folder

### Importing the Database

1. **Create a new database**:
   In MySQL or your database client, create a new database:
   ```sql
   CREATE DATABASE library_db;
   ```

## API Documentation

The API documentation for the Library Management System is available as a Postman collection.

### Online API Documentation

Access the API documentation online: [Postman Documentation](https://documenter.getpostman.com/view/38671941/2sAYQakWbA)

### How to Use the Postman Collection

1. Download the Postman collection file: [Library_API_Postman_Collection.json](/docs/Library%20Management%20System.postman_collection.json)
2. Open Postman and click on **Import**.
3. Upload the `Library_API_Postman_Collection.json` file.
4. Access all the API endpoints and test them.

### API Endpoints

#### Authors
- `GET /api/authors` - Get all authors.
- `POST /api/authors` - Add a new author.
- `PUT /api/authors/{id}` - Update an author by ID.
- `DELETE /api/authors/{id}` - Delete an author by ID.
- `GET /api/authors/{authorId}/books` - Get all books by a specific author.

#### Books
- `GET /api/books` - Get all books.
- `POST /api/books` - Add a new book.
- `PUT /api/books/{id}` - Update a book by ID.
- `DELETE /api/books/{id}` - Delete a book by ID.
- `GET /api/books/author/{authorId}` - Get all books by a specific author.
- `GET /api/books/search` - Search for books.

#### Borrow & Return
- `POST /api/borrows/borrow` - Borrow a book.
- `POST /api/borrows/return` - Return a borrowed book.
- `GET /api/borrows/{memberId}/history` - Get borrowing history of a specific member.

#### Members
- `GET /api/members` - Get all members.
- `POST /api/members` - Add a new member.
- `PUT /api/members/{id}` - Update a member by ID.
- `DELETE /api/members/{id}` - Delete a member by ID.
- `GET /api/members/{memberId}/borrow-history` - Get borrowing history of a specific member.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ganesh2394/Library-Management-System.git
   ```
