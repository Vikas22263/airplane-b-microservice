const { Router } = require("express");
const router = Router();
const booking = require("../../controllers/booking-controller");
const BookingController = new booking();
router.post("/booking", BookingController.createBooking);
router.get("/messageq",BookingController.sendMessageToQueue)

module.exports = router;
