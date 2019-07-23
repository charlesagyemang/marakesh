import { Router } from 'express';
import { version } from '../../../package.json';
import UserRouter from '../user/user.routes';
import EventRouter from '../event/event.routes';
import GeventRouter from '../gevent/gevent.routes';
import AttendantRouter from '../attendant/attendant.routes';

// Declare Router
const apiRouter = Router();

// get version number of  the api
apiRouter.get('/', (req, res) => {
  res.json({
    version,
  });
});

// Plug module routers
apiRouter.use('/users', UserRouter);
apiRouter.use('/events', EventRouter);
apiRouter.use('/attendants', AttendantRouter);
apiRouter.use('/gevents', GeventRouter);

export default apiRouter;
