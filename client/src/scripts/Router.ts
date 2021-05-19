import Navigo from 'navigo';
import { LoginController } from './controllers/Login';

const appRouter = new Navigo('/');
appRouter.on('/', new LoginController().execute());
appRouter.resolve();
export {appRouter};