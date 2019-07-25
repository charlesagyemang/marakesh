import { Client } from 'postmark';
import axios from 'axios';

// const axios = require('axios');

export const sendEmail = async (
  recepient,
  subject,
  name,
  eventName,
  pluLink,
  ratingLink,
) => {
  try {
    const client = new Client('f8594991-9522-4b31-99f9-61865e7ed1e4');
    client.sendEmailWithTemplate({
      From: 'admin@plineup.com',
      To: recepient,
      TemplateAlias: 'welcome',
      TemplateModel: {
        name,
        prog_name: eventName,
        plu_link: pluLink,
        rating_link: ratingLink,
        product_name: name,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const sendTextMessage = async (number, senderId, message) => {
  /* https://api.smsgh.com/v3/messages/send?From=AkokoPhoto&To=0506193708&Content=TryTwo&ClientId=idtdhbtx&ClientSecret=ybgoupdp
  axios.get(`https://apps.mnotify.net/smsapi?key=lC9KbHYOhz54uwiOXaz05vz9c&to=${number}&msg=${message}&sender_id=${senderId}`)
  .then((response) => { console.log(response.data); })
  .catch((error) => { console.log(error); });
  */
  axios.get(`https://api.smsgh.com/v3/messages/send?From=${senderId}&To=${number}&Content=${message}&ClientId=idtdhbtx&ClientSecret=ybgoupdp`)
  .then((response) => { console.log(response.data); })
  .catch((error) => { console.log(error); });
};
