const { Booking } = require("../models/index");
const axios = require("axios");
class BookingRepository {

  async createbooking(data) {
    try {
      const flightId = data.flightId;
      const getFlightRequestURl = `${process.env.FLIGHT_URL}/api/v1/flight/${flightId}`;
      const response = await axios.get(getFlightRequestURl);
      const flightData = response.data.data;
      const priceofTheflight = flightdata.price;
      if (data.noOfSeats > flightData.totalSeats) {
        throw { error: "seats are full" };
      };
      const totalCost=priceofTheflight*data.noOfSeats
      const bookingPayload={...data,totalCost}
      //more logic for this 
      const create = await Booking.create({ data });
      return create;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports=BookingRepository
