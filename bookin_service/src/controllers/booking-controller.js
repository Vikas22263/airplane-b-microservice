const { BookingRepository } = require("../service/create-service");

const { createChannel, publishMessage } = require("../utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("../config/serverconfig");
class BookingController {
  async sendMessageToQueue(req, res) {
    const channel = await createChannel();
    const data = { message: "sucesss" };
    const publishmessage = publishMessage(
      channel,
      REMINDER_BINDING_KEY,
      JSON.stringify(data)
    );
    console.log("data send to que")
    return res.status(200).json({ message: "item send to que from publisher" });
  }

  async createBooking(req, res) {
    try {
      const response = await bookingrepository(req.body);
      return response.status(200).json({
        data: null,
        message: "bookin created succesfully",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BookingController;
