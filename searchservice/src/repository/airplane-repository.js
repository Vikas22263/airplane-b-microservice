const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAiplane(id) {
    try {
      const airpalne = await Airplane.findByPk(id);
      return airpalne;
    } catch (error) {
      console.log("wrong in Airplanerepository");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
