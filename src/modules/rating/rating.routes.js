import { Router } from 'express';
import validate from 'express-validation';
import * as c from './rating.controller';
import v from './rating.validation';
import { authJwt } from '../../config/passport';

const RatingRouter = Router();

RatingRouter.get('/:id', authJwt, c.getRating);
RatingRouter.post('/', validate(v.createRating), c.createRating);
RatingRouter.patch('/:id', validate(v.updateRating), authJwt, c.updateRating);
RatingRouter.delete('/:id', authJwt, c.deleteRating);

export default RatingRouter;
