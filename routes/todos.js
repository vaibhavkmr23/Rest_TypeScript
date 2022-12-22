"use strict";
// import express from 'express';
// const router =  express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
// Or
const express_1 = require("express");
const todos = []; // specifying that todos is simply an array of Todo i.e. Array Type Syntax
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
});
exports.default = router;
