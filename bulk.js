/* eslint-disable linebreak-style */
/* eslint-disable no-console */
require('dotenv').config();
const fs = require('fs');
const { format } = require('path');
// const util = require('util');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const messageSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNum = process.env.TWILIO_PHONE_NUM;

const smsBody = 'Hi. This is Amy Roat, No Libs Democratic Committee Person. You are listed as having requested a mail-in ballot. I am encouraging you to deposit it in a Voting Drop Box ASAP. The closest drop box and satellite Voting Center is at 520 Columbus Blvd on the southwest corner of Spring Garden St. If you already submitted it, when and where? "Spoiling" the ballot at the polls on Nov 3 will be time consuming. Questions? Need a ride?';

const client = require('twilio')(accountSid, authToken);

// import target phone numbers from local file, spliting on newline
let targetNums = fs.readFileSync('./turf03.txt', 'utf8').split('\r\n');

// remove duplicate numbers by converting to a Set and back

targetNums = [...new Set(targetNums)];

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
console.log(formatNums.length);

// Promise.all(
//   formatNums.map((formatNum) => client.messages.create({
//     to: formatNum,
//     from: messageSid,
//     body: `${smsBody}`,
//   })),
// )
//   .then((messages) => {
//     console.log('Messages sent.');
//   })
//   .catch((err) => console.error(err));
