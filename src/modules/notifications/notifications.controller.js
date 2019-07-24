import { Client } from 'postmark';

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
