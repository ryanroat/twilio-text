/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;
const targetNums = [process.env.TARGET_PHONE_NUM]; // array of target phone numbers for smsBody

const smsBody = 'Monday night test message.';

// const client = require('twilio')(accountSid, authToken);

targetNums.map((targetNum) => {
  console.log(targetNum);
});

// client.messages.create({
//   to: targetNums,
//   from: twilioNum,
//   body: `${smsBody}`,
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.error(err));
