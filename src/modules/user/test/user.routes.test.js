import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import User from '../user.model';
import server from '../../../server';

describe('User::Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('should login successfully', async () => {
    await request(server).post('/api/users/register/').send({
      name: 'name',
      email: 'test@email.com',
      password: 'password',
    });

    const res = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    // console.log(res.body);

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
  });

  it('should get all user events', async () => {
    const user = await request(server).post('/api/users/register/').send({
      name: 'name',
      email: 'test@email.com',
      password: 'password',
    });

    const auth = { Authorization: `Bearer ${user.body.token}` };
    await request(server).post('/api/events/').set(auth).send({
      name: 'qweqweq',
      createdBy: user.body.id,
    });

    const res = await request(server).get(`/api/users/${user.body.id}3453`).set(auth);
    console.log(res.body);
  });

  it('get a user successfully', async () => {
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

    const res = await request(server).get(`/api/users/${body.id}`).set(auth);

    console.log(res.body);
  });

  it.only('Should Update  A User Successfully', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'Charles',
      email: 'mm@gmail.com',
      password: 'password',
    });

    const login = await request(server).post('/api/users/login').send({
      email: 'mm@gmail.com',
      password: 'password',
    });

    const auth = { Authorization: `Bearer ${login.body.token}` };

    const { body } = await request(server).put(`/api/users/${user.body.id}`).set(auth).send({
      name: 'Kimi uitar',
      email: 'koobiti@gmail.com',
      // password: 'password1',
    });

    const res = await request(server).get(`/api/users/${body.id}`).set(auth);

    console.log(res.body);
  });
});
