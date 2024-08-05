const { BookingRepository } = require("../repository");

const createrepository = new BookingRepository();
class BookingService {
  async createService(data) {
    try {
      const response = createrepository.createbooking(data);
      return response;
    } catch (error) {}
    console.log(error);
  }
}

module.exports = {
    BookingService,
};
