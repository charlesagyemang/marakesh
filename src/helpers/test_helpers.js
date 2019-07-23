import request from 'supertest-as-promised';
import User from '../modules/user/user.model';
import Event from '../modules/event/event.model';
import Rating from '../modules/rating/rating.model';
import Attendant from '../modules/attendant/attendant.model';


// adding a comp parameter to solve async issues
// adding a comp parameter to solve async issues
export const login = async (server) => {
  const user1 = await User.create({
    name: 'Paa Kwasi Ntoo',
    email: 'user@email.com',
    password: 'password' });

  const res = await request(server).post('/api/users/login').send({
    email: user1.email,
    password: 'password',
  });


  const user = res.body.user;
  // console.log(user);

  return {
    auth: { Authorization: `Bearer ${res.body.user.token}` },
    user,
  };
};

export const nuke = async () => {
  await Rating.destroy({ where: {} });
  await Attendant.destroy({ where: {} });
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
};

export const createEvent = async (server) => {
  await request(server).post('/api/users/register').send({
    name: 'Charles',
    email: 'mm@gmail.com',
    password: 'password',
  });

  const { body } = await request(server).post('/api/users/login').send({
    email: 'mm@gmail.com',
    password: 'password',
  });

  const auth = { Authorization: `Bearer ${body.token}` };
  const event = await request(server).post('/api/events/').set(auth).send({
    name: 'Alloo Event',
    createdBy: body.id,
    pluLink: 'https://google.com',
  });

  return { event: event.body, auth };
};
