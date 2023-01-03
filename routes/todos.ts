// import express from 'express';
// const router =  express.Router();

// Or
import { Router } from 'express';

import { Todo } from '../models/todo';

let todos: Todo[] = []; // specifying that todos is simply an array of Todo i.e. Array Type Syntax

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'Added Todo', todo: newTodo, todos: todos })
})

router.put('/todo/:todoId', (req, res, next) => {
    const tId = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text }
        return res.status(200).json({
            message: 'Update Todo',
            todos: todos
        })
    }
    res.status(401).json({ message: 'Could Not find Todo with this Id' })
})

router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'Todo Deleted', todos: todos })
})

export default router;