import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

import TodoRouter from './routes/todos';

app.use(TodoRouter);

app.listen(3000);