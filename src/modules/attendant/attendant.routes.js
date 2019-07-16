import { Router } from 'express';
import validate from 'express-validation';
import * as c from './attendant.controller';
import v from './attendant.validation';
import { authJwt } from '../../config/passport';

const AttendantRouter = Router();

AttendantRouter.get('/:id', authJwt, c.getAttendant);
AttendantRouter.post('/', validate(v.createAttendant), c.createAttendant);
AttendantRouter.patch('/:id', validate(v.updateAttendant), authJwt, c.updateAttendant);
AttendantRouter.delete('/:id', authJwt, c.deleteAttendant);

export default AttendantRouter;
