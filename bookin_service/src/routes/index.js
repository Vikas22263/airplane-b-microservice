const { Router } = require("express");
const router = Router();
const apiroutes = require("./v1/index");

router.use("/v1", apiroutes);

module.exports = router;
