import { Router } from 'express';
import validate from 'express-validation';
import * as c from './user.controller';
import v from './user.validation';
import { authJwt } from '../../config/passport';

const UserRouter = Router();

UserRouter.post('/register', validate(v.register), c.register);
UserRouter.get('/:id', authJwt, c.getUsers);
UserRouter.put('/:id', validate(v.updateUser), authJwt, c.updateUser);
UserRouter.post('/login', validate(v.login), c.login);


export default UserRouter;
