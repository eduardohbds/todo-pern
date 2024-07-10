const express = require("express");
const routes = express.Router();

const createTodoItem = require("./controller/TodoItemController/createTodoItem");

routes
    .post("/todos",createTodoItem.CreateTodoItem)

module.exports = routes;
