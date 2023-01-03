"use strict";
// import express from 'express';
// const router =  express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
// Or
const express_1 = require("express");
let todos = []; // specifying that todos is simply an array of Todo i.e. Array Type Syntax
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tId = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({
            message: 'Update Todo',
            todos: todos
        });
    }
    res.status(401).json({ message: 'Could Not find Todo with this Id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Todo Deleted', todos: todos });
});
exports.default = router;
