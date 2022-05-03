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

// this is the static message to send
const smsBody = 'On May 17, VOTE for Pete McDermott for State Representative. Pete is a high school teacher who will work to strengthen our education system, ensure that kids have a safe place to play and create, bring more family sustaining jobs home, and advocate for our retirees. Pete McDermott is committed to you and fighting to ensure that our community is stronger and safer. Ballot position #16. Thank you, Amy ** reply STOP to opt out **';
// const smsBody = '*** test message payload ***';

const client = require('twilio')(accountSid, authToken);

// import target phone numbers from local file, spliting on newline
let targetNums = fs.readFileSync('./turf/w57-d28.txt', 'utf8').split('\r\n');

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

// TODO: uncomment following code to send text messages once data is ready

Promise.all(
  formatNums.map((formatNum) => client.messages.create({
    to: formatNum,
    from: messageSid,
    body: `${smsBody}`,
  })),
)
  .then((messages) => {
    console.log('Messages sent.');
    // console.log(messages);
  })
  .catch((err) => console.error(err));
