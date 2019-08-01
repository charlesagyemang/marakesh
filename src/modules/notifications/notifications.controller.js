import { Client } from 'postmark';
import axios from 'axios';

// const axios = require('axios');

const clientId = 'fe1f6bb9-aee7-4a25-bd58-1067441563db'; // f8594991-9522-4b31-99f9-61865e7ed1e4
const aliasTemplate = 'code-your-own-1';

export const sendEmail = async (
  recepient,
  subject,
  name,
  eventName,
  pluLink,
  ratingLink,
) => {
  try {
    const client = new Client(clientId);
    client.sendEmailWithTemplate({
      From: 'response@vendyads.com',
      To: recepient,
      TemplateAlias: aliasTemplate,
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
  axios.get(`https://api.smsgh.com/v3/messages/send?From=${senderId}&To=${number}&Content=${message}&ClientId=idtdhbtx&ClientSecret=ybgoupdp`)
  .then((response) => { console.log(response.data); })
  .catch((error) => { console.log(error); });
};
