import HTTPStatus from 'http-status';
import Rating from './rating.model';

export const getRating = async (req, res) => {
  const id = req.params.id;

  const rating = await Rating.findById(id);
  if (!rating) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(rating);
};

export const createRating = async (req, res) => {
  const rating = await Rating.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(rating);
};

export const updateRating = async (req, res) => {
  const id = req.params.id;

  const rating = await Rating.findById(id);
  if (!rating) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    rating[key] = req.body[key];
  });

  await rating.save();

  res.status(HTTPStatus.OK).json(rating.toJson());
};


export const deleteRating = async (req, res) => {
  const id = req.params.id;

  const rating = await Rating.findById(id);
  if (!rating) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await rating.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
