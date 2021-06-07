import { Router } from 'express';
import classRouter from './class.routes';

const routes = Router();

routes.use('/class', classRouter); //each call on /class/something... 
// we're gonna use the classRouter
export default routes;
