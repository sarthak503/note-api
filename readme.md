
# Note-Taking API

This is a simple RESTful API built using Node.js, Express, and MongoDB for managing notes.

## Features

- Create, read, update, and delete notes
- Notes contain a title, content, and timestamps for creation and last update
- Data validation for note creation and update
- IST timezone for timestamps

## Getting Started

To run this API locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/note-taking-api.git

2. Install dependencies:
    ```bash
    cd note-taking-api
    npm install
    npm i express, express-validator,mongodb,mongoose,dotenv

3. Set up environment variables:
    ```bash
   * Create a .env file based on .env.example.
   * Add your MongoDB URI as DB_URI in the .env file.

4. Start the server:
    ```bash 
    node index.js

5. Run test suites :
    ```bash
    npm install jest supertest --save-dev
    npx jest

## API Endpoints

The API endpoints are as follows:

* GET /api/notes - Retrieve all notes
* GET /api/notes/:id - Retrieve a single note by ID
* POST /api/notes - Create a new note
* PUT /api/notes/:id - Update a note by ID
* DELETE /api/notes/:id - Delete a note by ID

For detailed API documentation, refer to [API Documentation](API_Docs.md)



## Technologies Used
* Node.js
* Express.js
* MongoDB
* Mongoose
* Jest (for testing)
* Supertest (for testing)

## Contributors
Sarthak Kumar

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.