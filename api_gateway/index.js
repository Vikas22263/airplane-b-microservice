const express = require("express");
const app = express();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");
const axios = require("axios");
const PORT = 3006;

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(morgan("combined"));
app.use(limiter);
app.use("/bookingservice", async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/v1/isauthenticated",
      {
        headers: req.headers["x-access-token"],
      }
    );
    if (response.data.sucess) {
      nect();
    }
  } catch (error) {
    return res.json({
      message: "unAuthorized",
    });
  }
});
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: "http://localhost:3005",
    changeOrigin: true,
  })
);

appStart();
app.listen(PORT, () => {
  console.log("server is runing", PORT);
});
