import HTTPStatus from 'http-status';
import Attendant from './attendant.model';
import Event from '../event/event.model';
import { sendEmail } from '../notifications/notifications.controller';

export const getAttendant = async (req, res) => {
  const id = req.params.id;

  const attendant = await Attendant.findById(id);
  if (!attendant) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(attendant);
};

export const createAttendant = async (req, res) => {
  // get event;
  const event = await Event.findByPk(req.body.eventId);
  req.body.specialId = (Math.floor(Math.random() * 90000) + 10000).toString();
  const attendant = await Attendant.create({ ...req.body });
  // Send Email
  try {
    sendEmail(attendant.email, `${event.name} programme line up`, `Please download the program line up using this link ${event.pluLink} \n your unique id you can use to rate after the event is ${req.body.specialId}`);
  } catch (e) {
    console.log(e);
  }
  res.status(HTTPStatus.CREATED).json(attendant);
};

export const updateAttendant = async (req, res) => {
  const id = req.params.id;

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
