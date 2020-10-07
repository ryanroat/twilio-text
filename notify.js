/* eslint-disable linebreak-style */
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const messageDis = process.env.TWILIO_MESSAGING_SERVICE_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;
const targetNums = [process.env.TARGET_PHONE_NUM]; // array of target phone numbers for smsBody

const smsBody = 'Monday night test message.';

const client = require('twilio')(accountSid, authToken);

const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

const bindings = targetNums.map((targetNum) => JSON.stringify({ binding_type: 'sms', address: targetNum }));

service.notifications
  .create({
    toBinding: bindings,
    body: smsBody,
  })
  .then((notification) => {
    console.log(notification);
  })
  .catch((err) => {
    console.error(err);
  });
