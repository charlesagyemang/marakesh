import HTTPStatus from 'http-status';
import Event from '../event/event.model';

export const getEventer = async (req, res) => {
  const id = req.params.id;

  const event = await Event.findByPk(id);
  if (!event) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(event);
};


export const getAllEvnets = async (req, res) => {
  const event = await Event.findAll({ where: { } });
  if (!event) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(event);
};
