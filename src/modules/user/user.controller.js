import HTTPStatus from 'http-status';
// import sequelize from 'sequelize';
import User from './user.model';
import Event from '../event/event.model';
import Attendant from '../attendant/attendant.model';


export const getUsers = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [{
      model: Event,
      include: [{
        model: Attendant,
      }],
    }],
  });
  if (!user) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(user);
};


export const register = async (req, res, next) => {
  try {
    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    const u = user.auth();
    return res.status(HTTPStatus.CREATED).json(u);
  } catch (ex) {
    if (ex) next(ex);
    return res.send(ex);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user || !user.authenticate(req.body.password)) {
      return res.status(HTTPStatus.NOT_FOUND).json({ message: 'User not found' });
    }

    const u = user.auth();
    return res.json(u);
  } catch (err) {
    if (err) next(err);
    return res.send(err);
  }
};
