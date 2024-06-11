# Personal-Bookshelf

Personal-Bookshelf is a simple web application that allows users to browse a list of books and add them to a cart. The cart data is persisted using local storage, so it remains available even after page reloads.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: npm is the package manager for Node.js. It is installed automatically with Node.js.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/personal-bookshelf.git
    cd personal-bookshelf
    ```

2. **Install dependencies**:

    Navigate to the project directory and run:

    ```bash
    npm install
    ```

## Running the Application

To run the application on your local machine, follow these steps:

1. **Start the development server**:

    ```bash
    npm start
    ```

2. **Open the application in your browser**:

    The development server should automatically open the application in your default web browser. If it doesn't, open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

Here is an overview of the project's structure:

personal-bookshelf/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Books.js
│ │ ├── BookList.js
│ │ ├── BooksListPage.js
│ │ ├── CartPage.js
│ │ ├── NavBar.js
│ │ └── ...
│ ├── context/
│ │ ├── CartContext.js
│ ├── api/
│ │ ├── api.js
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md


## Technologies Used

The project is built with the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing between different pages.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.
- **Local Storage**: For persisting cart data across page reloads.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

