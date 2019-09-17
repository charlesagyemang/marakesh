// import HTTPStatus from 'http-status';
import { nuke } from '../../../helpers/test_helpers';
// import Attendant from '../attendant.controller';
import { sendTextMessage } from '../../notifications/notifications.controller';

describe('Attendant:Controller', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.only('skip this test', async () => {
    try {
      sendTextMessage('0541348180', 'Money Heist', 'jgwvgachcha');
    } catch (e) {
      console.log(e);
    }
  });
});
