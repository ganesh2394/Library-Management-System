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

## API Documentation

The API documentation for the Library Management System is available as a Postman collection.

### How to Use the Postman Collection

1. Download the Postman collection file: [Library_API_Postman_Collection.json](/docs/Library%20Management%20System.postman_collection.json)
2. Open Postman and click on **Import**.
3. Upload the `Library_API_Postman_Collection.json` file.
4. Access all the API endpoints and test them.

### API Endpoints

- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book
- `PUT /api/books/{id}` - Update a book
- `DELETE /api/books/{id}` - Delete a book
- `GET /api/books/{authorId}` - Get all books by a specific author

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ganesh2394/Library-Management-System.git
   ```
