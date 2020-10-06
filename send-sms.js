/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;
const targetNum = process.env.TARGET_PHONE_NUM;

const smsBody = 'Monday night test message.';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: targetNum,
  from: twilioNum,
  body: `${smsBody}`,
})
  .then((message) => console.log(message))
  .catch((err) => console.error(err));