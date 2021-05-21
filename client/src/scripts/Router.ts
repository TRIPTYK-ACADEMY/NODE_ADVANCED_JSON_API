import Navigo from 'navigo';
import { AddTodoController } from './controllers/AddTodo';
import { LoginController } from './controllers/Login';
import { RegisterController } from './controllers/Register';
import { TodosController } from './controllers/Todos';

const appRouter = new Navigo('/');
appRouter.on('/', new LoginController().execute());
appRouter.on('/register', new RegisterController().execute());
appRouter.on('/todos', new TodosController().execute());
appRouter.on('/todos/add', new AddTodoController().execute());
appRouter.resolve();
export {appRouter};