const express = require("express");
require("./config/serverconfig");
const { PORT,REMINDER_BINDING_KEY } = require("./config/serverconfig");
const apiroutes = require("./routes/index");
const {subscribeMessage,createChannel}=require("./utils/messageQueue")
const emailservice=require("./service/email-service")
const email=new emailservice()
const app = express();


const setupNadStartServer = async () => {
  app.use(express.json());
  app.use("/api", apiroutes);

  const channel = await createChannel();

  await subscribeMessage(channel,email.testingque,REMINDER_BINDING_KEY)

  app.listen(PORT, () => {
    console.log("server is running in port", PORT);
  });
};
setupNadStartServer();
