const express = require("express");
require("./config/serverconfig");
const { PORT } = require("./config/serverconfig");
const emailservice = require("./services/email-service");
const app = express();
var cron = require('node-cron');
const emailserice = new emailservice();

const email = async () => {
  try {
    const email =await emailserice.sendMail(
      "Vikaspatel22263@gmail.com",
      "",
      "Test-01",
      "helo aoo leto"
    );
    console.log(email);
  } catch (error) {
    console.log(error);
  }
};
// email()



app.listen(PORT, () => {
  console.log("server is running in port", PORT);
  cron.schedule('*/2 * * * *', () => {
    console.log('running a task every two minutes');
  });
});
