const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = { 
  PORT: process.env.PORT,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  REMINDER_BINDING_KEY: process.env.REMINDER_SERVICE,
  MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL
};
