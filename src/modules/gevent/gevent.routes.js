import { Router } from 'express';
import * as c from '../gevent/gevent.controller';


const GeventRouter = Router();

GeventRouter.get('/:id', c.getEventer);
GeventRouter.get('/', c.getAllEvnets);


export default GeventRouter;
