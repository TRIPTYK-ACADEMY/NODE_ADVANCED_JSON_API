import Navigo from 'navigo';
import { LoginController } from './controllers/Login';
import { TodosController } from './controllers/Todos';

const appRouter = new Navigo('/');
appRouter.on('/', new LoginController().execute());
appRouter.on('/todos', new TodosController().execute());
appRouter.resolve();
export {appRouter};