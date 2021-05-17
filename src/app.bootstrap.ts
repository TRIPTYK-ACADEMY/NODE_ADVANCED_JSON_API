import express from 'express';
import { apiTodosRouter } from './routes/api.router';

const app = express();

app.use(apiTodosRouter);

export {app};