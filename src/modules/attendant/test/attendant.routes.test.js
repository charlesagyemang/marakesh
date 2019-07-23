import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke, createEvent } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Attendant:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('Create attendant Successfully', async () => {
    const { event, auth } = await createEvent(server);

    // console.log(event);

    const res = await request(server).post('/api/attendants/').send({
      eventId: event.id,
      name: 'Charles',
      email: 'mm@gmail.com',
      phoneNumber: '0277 66 55 11',
      organisation: 'Kulibalu',
    }).set(auth);

    console.log(res.body);

    // const { body } = await request(server).get(`/api/events/${res.body.eventId}`).set(auth);
    // const resFinal = await request(server).get(`/api/users/${body.createdBy}`).set(auth);
    // console.log(resFinal.body.events[0].attendants);
    expect(res.statusCode).toBe(HTTPStatus.CREATED);
  });
});
