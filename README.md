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

- link of api documentation

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
