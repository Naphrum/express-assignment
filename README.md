# Express Assignement

## Step 1: Initialize a new npm project

Initialize a new npm project in this directory.

```sh
npm init -y
```

## Step 2: Install Express

Install the Express package using npm.

```sh
npm install express
```

## Step 3: Install nodemon as a dev dependency

Install nodemon as a dev dependency using npm.

```sh
npm install nodemon --save-dev
```

## Step 4: Create a new file for your Express app

Create a new file called `index.js` in your app directory.

## Step 5: Implement the Express app

Create an express app in `index.js` and listen on port 5000.

## Step 6: Create a start script in package.json

Create a start script in `package.json` that runs `nodemon index.js`.

```json
"scripts": {
  "start": "nodemon index.js"
}
```

## Step 7: Run the app

Run the app using `npm run start`.

## Step 8: Import the todos data

Import the todos data from `todos.json` into `index.js`.

## Step 9: Create the endpoints

Create the following endpoints using the data from the todos json file as your primary data source.

### GET all todos

Endpoint: `GET /api/todos`

Behaviour: Returns an array of all todos.

Example Payload:

```json
[
  {
    "id": 1,
    "title": "Buy milk",
    "completed": true
  },
  {
    "id": 2,
    "title": "Buy eggs",
    "completed": false
  }
]
```

This get endpoint should also accept a query parameter called `completed` that will filter the todos by completed status.

Example request:

```sh
GET /api/todos?completed=true
```

Example response:

```json
[
  {
    "id": 1,
    "title": "Buy milk",
    "completed": true
  }
]
```

### GET a single todo by ID

Endpoint: `GET /api/todos/:id`

Behaviour: Returns a single todo with the specified ID.

Example payload:

```json
{
  "id": 1,
  "title": "Buy milk",
  "completed": true
}
```

### POST a new todo

Endpoint: `POST /api/todos`

Behaviour: Creates a new todo with the data in the request body and returns the new todo with an ID and defaults completed to `false`.

Body:

```json
{
  "title": "Buy milk"
}
```

Response:

```json
{
  "id": 1,
  "title": "Buy milk",
  "completed": false
}
```

### PUT (update) an existing todo

Endpoint: `PUT /api/todos/:id`

Behaviour: Updates an existing todo with the data in the request body and returns the updated todo.

You should be able to send any combination of title and completed in the request body and have it update the todo accordingly.

Body:

```json
{
  "title": "Buy laundry detergent"
}
```

Response:

```json
{
  "id": 1,
  "title": "Buy laundry detergent",
  "completed": false
}
```

Body:

```json
{
  "completed": true
}
```

Response:

```json
{
  "id": 1,
  "title": "Buy laundry detergent",
  "completed": true
}
```

Body:

```json
{
  "title": "Buy lightbulbs",
  "completed": false
}
```

Response:

```json
{
  "id": 1,
  "title": "Buy lightbulbs",
  "completed": false
}
```

### DELETE an existing todo

### DELETE a todo by ID

Endpoint: `DELETE /api/todos/:id`

Behaviour: Deletes a todo with the specified ID. This endpoint should return the list of todos after the specified todo has been deleted.

Example payload:

```json
[
  {
    "id": 2,
    "title": "Buy eggs",
    "completed": false
  }
]
```
