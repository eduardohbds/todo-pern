const express = require("express");
const Todo = require('./controller/TodoItemController/Todo')

const routes = express.Router();

const TodoObj = new Todo();

routes
    .post("/todos",TodoObj.createTodo)
    .get("/todos",TodoObj.listAll)
    .get("/todos/:id",TodoObj.getTodoItem)
    .put("/todos/:id",TodoObj.updateTodoItem)
    .delete("/todos/:id",TodoObj.deleteTodoItem)

module.exports = routes;
