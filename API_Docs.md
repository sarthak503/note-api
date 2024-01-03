# API Documentation

This document outlines the endpoints, request formats, and responses for the Note-Taking API.

## Get All Notes

Endpoint: `GET /api/notes`

### Request

- Method: `GET`
- URL: `/api/notes`

### Response

- Status: `200 OK`
- Content: JSON array of notes
  - `id` (string): Unique identifier for the note
  - `title` (string): Title of the note
  - `content` (string): Content of the note
  - `createdAt` (string): Timestamp of note creation in IST format
  - `updatedAt` (string): Timestamp of last note update in IST format

## Get a Single Note

Endpoint: `GET /api/notes/:id`

### Request

- Method: `GET`
- URL: `/api/notes/:id`
- Parameters:
  - `id` (string): Unique identifier for the note

### Response

- Status: `200 OK`
- Content: JSON object representing the note with the specified ID

## Create a New Note

Endpoint: `POST /api/notes`

### Request

- Method: `POST`
- URL: `/api/notes`
- Body:
  - `title` (string, required): Title of the note
  - `content` (string, required): Content of the note

### Response

- Status: `201 Created`
- Content: JSON object representing the newly created note

## Update a Note

Endpoint: `PUT /api/notes/:id`

### Request

- Method: `PUT`
- URL: `/api/notes/:id`
- Parameters:
  - `id` (string): Unique identifier for the note
- Body (Optional):
  - `title` (string): Updated title of the note
  - `content` (string): Updated content of the note

### Response

- Status: `200 OK`
- Content: JSON object representing the updated note

## Delete a Note

Endpoint: `DELETE /api/notes/:id`

### Request

- Method: `DELETE`
- URL: `/api/notes/:id`
- Parameters:
  - `id` (string): Unique identifier for the note

### Response

- Status: `200 OK`
- Content: JSON object confirming the deletion of the note

