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

  it.only('should get all user events', async () => {
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
});
