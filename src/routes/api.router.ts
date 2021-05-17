import { Router } from 'express';
import { TodoController } from '../controllers/api/v1/TodoController';


const apiTodosRouter = Router();

//DEFINE my Routes for todos
apiTodosRouter.get('/api/v1/todos', TodoController.findAll);


export {apiTodosRouter};