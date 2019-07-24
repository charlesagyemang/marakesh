// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Event from '../event.model';
import server from '../../../server';

describe('Event:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create Event Successfuly', async () => {
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

    const res = await request(server).get(`/api/events/${event.body.id}`).set(auth);
    console.log(res.body);
    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(event.id);
  });

  it.only('Edit Event Successfuly', async () => {
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

    const res = await request(server).patch(`/api/events/${event.body.id}`).set(auth).send({
      name: 'quiiliwa',
    });

    console.log(res.statusCode);
    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(event.id);
  });
});
