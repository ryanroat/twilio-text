## project deps

* dotenv
* twilio

## project file reqs
* .env
  * process.env.TWILIO_ACCOUNT_SID
  * process.env.TWILIO_AUTH_TOKEN
* .gitignore
  * .env

# project outline
based off: https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html
* receive list of phone numbers
  * need to standardize number to Twilio format
  * need to archive number as collected
* receive outgoing SMS message
* send list message

## in process

### complete