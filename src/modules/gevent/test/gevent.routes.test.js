import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Event from '../event.model';
import server from '../../../server';

describe('Event:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('Getiro Events successfully', async () => {
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
      name: 'qweqweq',
      createdBy: body.id,
    });

    const res = await request(server).get(`/api/gevents/${event.body.id}`);
    const res2 = await request(server).get('/api/gevents/');
    console.log(res2.body);
    console.log(res.body);
    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(event.id);
  });
});
