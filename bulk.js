/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();
const fs = require('fs');
const { format } = require('path');
// const util = require('util');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const messageDis = process.env.TWILIO_MESSAGING_SERVICE_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;

const smsBody = 'Hi. This is Amy Roat, No Libs Democratic Committee Person. You requested a mail-in ballot. I am encouraging you to deposit it in a Voting Drop Box ASAP. The closest drop box and satellite Voting Center is at 520 Columbus Blvd on the southwest corner of Spring Garden St. If you already submitted it, when and where? Questions?';

const client = require('twilio')(accountSid, authToken);

// code to save targetNums to local file
// fs.writeFileSync('./data.txt', targetNums.toString(), 'utf-8');

// test code to read targetNums array from local file
// import target phone numbers from local file, spliting on newline
const targetNums = fs.readFileSync('./turf01.txt', 'utf8').split('\r\n');
// tn = JSON.parse(targetNums);

// const client = require('twilio')(accountSid, authToken);

// format target phone numbers to twilio standard
const formatNums = targetNums.map((targetNum) => {
  // strip dashes from target phone number data
  const regex = /[^0-9]+/g; // matches anything not 0 - 9
  let formatNum = targetNum.replace(regex, '');
  // add country code to beginning of number
  // TODO: add conditional to check if needed
  formatNum = '+1'.concat(formatNum);

  console.log(formatNum);
  return formatNum;
});
console.log(formatNums);

// Promise.all(
//   targetNums.map((targetNum) => {
//     return client.messages.create({
//       to: targetNums,
//       from: twilioNum,
//       body: `${smsBody}`,
//     });
//   });
// )
//   .then(messages => {
//     console.log('Messages sent.')
//   })
//   .catch((err) => console.error(err));

// client.messages.create({
//   to: targetNums,
//   from: twilioNum,
//   body: `${smsBody}`,
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.error(err));
