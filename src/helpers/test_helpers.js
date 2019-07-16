import request from 'supertest-as-promised';
import User from '../modules/user/user.model';
import Event from '../modules/event/event.model';


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
  await Event.destroy({ where: {} });
  await User.destroy({ where: {} });
};
