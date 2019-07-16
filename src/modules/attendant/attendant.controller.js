import HTTPStatus from 'http-status';
import Attendant from './attendant.model';
import { sendEmail } from '../notifications/notifications.controller';

export const getAttendant = async (req, res) => {
  const id = req.id;

  const attendant = await Attendant.findById(id);
  if (!attendant) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(attendant);
};

export const createAttendant = async (req, res) => {
  req.body.specialId = (Math.floor(Math.random() * 90000) + 10000).toString();
  const attendant = await Attendant.create({ ...req.body });
  // Send Email
  sendEmail('micnkru@gmail.com', '##[Admaxx]', 'Mesage wo ha oo');
  res.status(HTTPStatus.CREATED).json(attendant);
};

export const updateAttendant = async (req, res) => {
  const id = req.id;

  const attendant = await Attendant.findById(id);
  if (!attendant) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    attendant[key] = req.body[key];
  });

  await attendant.save();

  res.status(HTTPStatus.OK).json(attendant.toJson());
};


export const deleteAttendant = async (req, res) => {
  const id = req.id;

  const attendant = await Attendant.findById(id);
  if (!attendant) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await attendant.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
