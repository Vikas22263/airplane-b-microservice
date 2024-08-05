const { Router } = require("express");
const { createTicket } = require("../../controllers/ticket-controller");
const route = Router();

route.post("/ticket", createTicket);
route.get("/price",(req,res)=>{
    console.log('request recive')
res.json("on the proxy test test route ")
})

module.exports = route;
