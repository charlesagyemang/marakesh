import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke, createEvent } from '../../../helpers/test_helpers';
// import Rating from '../rating.model';
import server from '../../../server';

describe('Rating:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('Create attendant Successfully', async () => {
    const { event, auth } = await createEvent(server);

    // console.log(event);

    const res = await request(server).post('/api/ratings/').send({
      eventId: event.id,
      score: 5,
      specialId: 'hafagfhgfga',
    });

    console.log(res.body);

    const { body } = await request(server).get(`/api/events/${res.body.eventId}`).set(auth);
    console.log(body);
    // const resFinal = await request(server).get(`/api/users/${body.createdBy}`).set(auth);
    // console.log(resFinal.body.events[0].attendants);
    expect(res.statusCode).toBe(HTTPStatus.CREATED);
  });
});
