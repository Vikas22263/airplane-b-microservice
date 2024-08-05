const express = require("express");
require("./config/serverconfig");
const { PORT } = require("./config/serverconfig");
const apiroutes = require("./routes/index");
const app = express();

const { createChannel } = require("./utils/messageQueue");

const setupNadStartServer = async () => {
  app.use(express.json());
  app.use("/api", apiroutes);

  const channel = await createChannel();

  app.listen(PORT, () => {
    console.log("server is running in port", PORT);
  });
};
setupNadStartServer();
