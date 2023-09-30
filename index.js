const express = require("express");
const todos = require("./todos.json");
const _ = require("lodash");

const app = express();

let nextId = todos.length + 1;

app.use(express.json());

app.get("/api/todos", (req, res) => {
    console.log(typeof(req.query.completed))
  if (req.query.completed !== undefined) {
    const filteredTodo = todos.filter((todo) => todo.completed === JSON.parse(req.query.completed));
    return res.json(filteredTodo);
  }
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const findTodo = todos.find((todo) => todo.id === Number(req.params.id));
  if (!findTodo) {
    return res.sendStatus(404);
  }
  res.json(findTodo);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: nextId,
    name: req.body.name,
    completed: req.body.completed,
  };
  console.log(newTodo);
  todos.push(newTodo);
  nextId++;
  res.status(201).send(todos);
});

app.put("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(
    (todo) => todo.id === Number(req.params.id)
  );
  if (index < 0) {
    return res.sendStatus(404);
  }
  const todo = todos[index];
  const sanitizeBody = _.pick(req.body, [
    "name",
    "completed",
  ]);
  const newTodo = { ...todo, ...req.body };
  todos.splice(index, 1, newTodo);
  res.status(200).json(todos);
});

app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(
      (todo) => todo.id === Number(req.params.id)
    );
  if(index < 0){
      return res.status(200).json(todos)
  }
  todos.splice(index,1)
  res.status(200).json(todos)
})

app.listen(5000, () => console.log("Express app started on port 5000"));
