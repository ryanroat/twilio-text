/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;
const targetNum = process.env.TARGET_PHONE_NUM;

const smsBody = 'Hi. This is Amy Roat, No Libs Democratic Committee Person. You requested a mail-in ballot. I am encouraging you to deposit it in a Voting Drop Box ASAP. The closest drop box and satellite Voting Center is at 520 Columbus Blvd on the southwest corner of Spring Garden St. If you already submitted it, when and where? Questions?';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: targetNum,
  from: twilioNum,
  body: `${smsBody}`,
})
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
