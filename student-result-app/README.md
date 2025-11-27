# Student Result Management System

A complete React application for managing student records with CRUD operations.

## Features
- Add new students
- View all students in a table
- Edit existing student records
- Delete students
- View detailed student information
- Auto-calculate grades based on marks
- JSON Server backend for data persistence

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install JSON Server:
```bash
npm install -g json-server
```

## Running the Application

1. Start JSON Server (in one terminal):
```bash
npm run server
```

2. Start React App (in another terminal):
```bash
npm start
```

The app will run on http://localhost:3000
JSON Server will run on http://localhost:5000

## Usage

1. Click "Load Students" to fetch all students from the database
2. Click "Add Student" to create a new student record
3. Use action buttons (View, Edit, Delete) for each student
4. Grades are automatically calculated based on marks

## Technologies Used
- React 18
- React Hooks (useState)
- Fetch API for CRUD operations
- JSON Server as backend
- CSS3 for styling
