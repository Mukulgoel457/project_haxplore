# Online Temple Booking System

## Overview

The Online Temple Booking System is a web-based application designed to facilitate the booking of temple visits and events. Users can log in, register, book visits, and read blogs about temple events. The system ensures secure and efficient booking management for both users and administrators.

## Features

- **User Authentication:** Secure login and registration system.
- **Booking System:** Users can book tickets for temple visits by providing necessary details.
- **Blogs:** Temple admins can post blogs and images about temple events and updates.
- **Invoice Generation:** After booking, users receive an invoice with their booking details.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

#### 1. Clone the repository:

    git clone https://github.com/Mukulgoel457/project_haxplore.git
    cd project_haxplore

#### 2. Install the server dependencies and start the server:

    cd server
    npm install
    npm start

#### 3. Set up the database connection:

- Import `connect.js` and invoke it in `start()`.
- Create a `.env` file in the root and add your MongoDB URI:

    MONGO_URI=your_mongodb_uri

### Running the Application

Start the server as described in the installation steps. Open another terminal, navigate to the root of the project, and start the client:

    cd src
    npm install
    npm start

Access the application at `http://localhost:3000`.

## Usage

### Login Page

Users land on the login page upon visiting the website. Existing users can log in with their credentials, while new users can register.

### Register Page

New users can register by providing valid credentials.

### Home Page

The home page includes the main header with navigation buttons for the home page, booking system, and blogs.

### Booking Page

Users can book a ticket by providing necessary details such as name, email, number of members, and booking date. Upon successful booking, an invoice is generated.

## Server Details

### Routes

- `auth.js`: Handles user authentication (register, login).
- `jobs.js`: Manages ticket-related operations.

### Controllers

- `auth.js`: Contains functions for registering and logging in users.
- `jobs.js`: Contains functions for creating and fetching tickets.

### Middleware

- `authentication.js`: Middleware for authenticating users.
- `error-handler.js`: Handles errors.
- `not-found.js`: Handles 404 errors.

### Models

- `User.js`: Defines the User schema.
- `Job.js`: Defines the Job schema.
- `Ticket.js`: Defines the Ticket schema.
- `Invoice.js`: Defines the Invoice schema.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License.

---

For more information and detailed documentation, please visit the [project documentation](https://docs.askthecode.ai).

---
